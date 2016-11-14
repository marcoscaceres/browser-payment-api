// [Constructor(sequence < PaymentMethodData > methodData, PaymentDetails details, optional PaymentOptions options),
//   SecureContext
// ]
// interface PaymentRequest: EventTarget {
//   Promise < PaymentResponse > show();
//   Promise < void > abort();

//   readonly attribute PaymentAddress ? shippingAddress;
//   readonly attribute DOMString ? shippingOption;
//   readonly attribute PaymentShippingType ? shippingType;

//   // Supports "shippingaddresschange" event 
//   attribute EventHandler onshippingaddresschange;

//   // Supports "shippingoptionchange" event 
//   attribute EventHandler onshippingoptionchange;
// };

const internalSlots = new WeakMap();

class EventTarget {

}


class PaymentRequest extends EventTarget {
  constructor(methodData, details, options) {
    super();

  }
  get shippingAddress() {

  }
  get shippingOption() {

  }
  get shippingType() {

  }
  get onshippingaddresschange() {

  }
  set onshippingaddresschange(value) {

  }
  get onshippingoptionchange() {

  }
  set onshippingoptionchange(value) {

  }
};
