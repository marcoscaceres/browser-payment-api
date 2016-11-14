/**
 * PaymentRequest constructor
 * https://w3c.github.io/browser-payment-api/#paymentrequest-constructor
 */

const validMethods = Object.freeze([Object.freeze({
  supportedMethods: ["visa"] 
})]);

const validDetails = Object.freeze({
  total: {
    label: "Total due",
    amount: { currency: "USD", value: "60.00" }, // US$60.00
  }
})


try {
  new PaymentRequest([], validDetails);
  console.assert(false, "If the length of the methodData sequence is zero, then throw a TypeError");
} catch (err) {
  const isTypeError = err instanceof TypeError;
  console.assert(isTypeError, "the exception must be an instance of TypeError", err);
}

try {
  // Smoke tests
  new PaymentRequest([{ supportedMethods: ["visa"] }]);
} catch (err) {
  console.assert(false, "Unexpected exception when method data is 1", err);
}



const invalidMethods = [
  [{ supportedMethods: [] }],
  [{ supportedMethods: ["visa", "bitcoin"] }, { supportedMethods: [] }],
  [{ supportedMethods: ["visa"] }, { supportedMethods: [] }, { supportedMethods: ["bitcoin"] }],
]

invalidMethods.forEach(invalidMethod => {
  try {
    new PaymentRequest(invalidMethod, validDetails);
    console.assert(false, "For each PaymentMethodData dictionary, if the length of the supportedMethods sequence is zero, then throw a TypeError.")
  } catch (err) {
    const isTypeError = err instanceof TypeError;
    console.assert(isTypeError, "the exception must be an instance of TypeError");
  }
});


// If the browsing context of the script calling the constructor is a nested browsing context whose origin is different from the top-level browsing context's origin and the nested browsing context is not allowed to make payment requests, then throw a SecurityError.

// If details does not contain a value for total, then throw a TypeError.

try {
  // Smoke test - If details does not contain a value for total, then throw a TypeError.
  new PaymentRequest(validMethods, validDetails);
} catch (err) {
  console.assert(false, "Unexpected error given validDetails and validMethods");
}

const invalidDetails = [
  { total: [] },
  { total: null },
  { total: 123 },
  { total: "$123" },
  {total: {} }
]

invalidMethods.forEach(invalidMethod => {
  try {
    new PaymentRequest(invalidMethod, validDetails);
    console.assert(false, "For each PaymentMethodData dictionary, if the length of the supportedMethods sequence is zero, then throw a TypeError.")
  } catch (err) {
    const isTypeError = err instanceof TypeError;
    console.assert(isTypeError, "the exception must be an instance of TypeError");
  }
});



// If details.total.amount.value is not a valid decimal monetary value, then throw a TypeError.
// If the first character of details.total.amount.value is U+002D HYPHEN-MINUS, then throw a TypeError. total must be a non-negative amount.
// If the details.displayItems sequence contains any PaymentItem objects with an amount that is not a valid decimal monetary value, then throw a TypeError.
// If the details.shippingOptions sequence contains any PaymentShippingOption objects with an amount that is not a valid decimal monetary value, then throw a TypeError.
// If details contains a value for error, then throw a TypeError.
// For each PaymentMethodData in methodData, if the data field is supplied but is not a JSON-serializable object, then throw a TypeError.
// For each PaymentDetailsModifier in details.modifiers, if the total field is supplied and is not a valid decimal monetary value, then throw a TypeError.
// For each PaymentDetailsModifier in details.modifiers, if the total field is supplied and the first character of total.amount.value is U+002D HYPHEN-MINUS, then throw a TypeError. total must be a non-negative amount.
// For each PaymentDetailsModifier in details.modifiers, if the additionalDisplayItems sequence contains any PaymentItem objects with an amount that is not a valid decimal monetary value, then throw a TypeError.
// Let request be a new PaymentRequest.
// Store methodData into request@[[methodData]].
// The methodData supplied to the PaymentRequest constructor should be in the order of preference of the caller. Implementations may show payment methods in this order if possible but should prioritize the preference of the user when presenting payment methods.

// Store details into request@[[details]].
// Store options into request@[[options]].
// Set the value request@[[state]] to created.
// Set the value of the shippingAddress attribute on request to null.
// Set the value of the shippingOption attribute on request to null.
// Set the value of the shippingType attribute on request to null.
// If options.requestShipping is set to true, then set the value of the shippingType attribute on request to options.shippingType. If options.shippingType is not a valid PaymentShippingType value then set the shippingType attribute on request to "shipping".
// NOTE
// This behavior allows a page to detect if it supplied an unsupported shipping type. This will be important if new shipping types are added to a future version of this specification but a page is run in a user agent supporting an earlier version.
// If the details.shippingOptions sequence contains multiple PaymentShippingOption objects that have the same id, then set the shippingOptions field of request@[[details]] to an empty sequence.
// If request@[[details]] contains a shippingOptions sequence and if any PaymentShippingOption in the sequence has the selected field set to true, then set shippingOption to the id of the last ShippingOption in the sequence with selected set to true.
// Set the value request@[[updating]] to false.
// Return request.
