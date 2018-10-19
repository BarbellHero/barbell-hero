import { amrap } from "../amrap";

describe("amrap", () => {
  let movementSet;

  beforeEach(() => {
    movementSet = { repetitions: 20 };
  });

  it("should format the repetitions", () => {
    expect(amrap(movementSet)).toEqual(`${movementSet.repetitions} reps`);
  });

  describe("when amrap is set", () => {
    beforeEach(() => {
      movementSet.amrap = true;
      movementSet.repetitions = 100;
    });

    it("adds a +", () => {
      expect(amrap(movementSet)).toEqual(`${movementSet.repetitions}+ reps`);
    });
  });
});
