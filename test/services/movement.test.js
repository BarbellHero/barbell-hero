const assert = require("assert");
const app = require("../../src/app");

describe("'movement' service", () => {
  it("registered the service", () => {
    const service = app.service("api/movement");

    assert.ok(service, "Registered the service");
  });
});
