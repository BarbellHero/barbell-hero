export function amrap(movementSet) {
  let result = `${movementSet.repetitions}`;
  if (movementSet.amrap) {
    result += "+";
  }
  return `${result} reps`;
}
