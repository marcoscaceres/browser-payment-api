function isValidDecimalMonetaryValue(value){
  return /^-?[0-9]+(\.[0-9]+)?$/.test(value);
}