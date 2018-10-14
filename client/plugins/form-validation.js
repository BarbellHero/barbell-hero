import Vue from "vue";
import Vuelidate from "vuelidate";
import * as validators from "vuelidate/lib/validators";

Vue.use(Vuelidate);

const required = convertValidator(validators.required);
const email = convertValidator(validators.email);
const sameAs = (propertyLocator, message) =>
  convertValidator(validators.sameAs(propertyLocator))(message);

function convertValidator(validator) {
  return message => v => validator.call(null, v) || message;
}

export { required, sameAs, email };
