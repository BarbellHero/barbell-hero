import Vue from "vue";
import Vuelidate from "vuelidate";
import * as validators from "vuelidate/lib/validators";

Vue.use(Vuelidate);

const required = message => v => validators.required(v) || message;

export { required };
