import Vue from "vue";

Vue.filter("amrap", function(movementSet) {
  let result = `${movementSet.repetitions}`;
  if (movementSet.amrap) {
    result += "+";
  }
  return `${result} reps`;
});
