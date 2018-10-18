import Vue from "vue";

Vue.filter("amrap", function(value, movementSet) {
  if (!movementSet) {
    return value;
  }
  let result = `${movementSet.repetitions}`;
  if (movementSet.amrap) {
    result += "+";
  }
  return `${result} reps`;
});
