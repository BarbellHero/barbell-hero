import Vue from "vue";
import Vuelidate from "vuelidate";
import * as validators from "vuelidate/lib/validators";

Vue.use(Vuelidate);

export const required = convertValidator({
  validator: validators.required,
  message: "This field is required"
});

export const email = convertValidator({
  validator: validators.email,
  message: "Must be a valid email"
});

export const sameAs = (propertyLocator, message) =>
  convertValidatorAndTakeMessage(validators.sameAs(propertyLocator))(message);

function convertValidator({ validator, message }) {
  return v => validator.call(null, v) || message;
}

function convertValidatorAndTakeMessage(validator) {
  return message => v =>
    validator.call(null, v) || message || "Fields must match";
}
