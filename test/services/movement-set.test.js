const assert = require("assert");
const app = require("../../src/app");

describe("'movement-set' service", () => {
  it("registered the service", () => {
    const service = app.service("api/movement-set");

    assert.ok(service, "Registered the service");
  });
});
