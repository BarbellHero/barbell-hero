const assert = require("assert");
const app = require("../../src/app");

describe("'workout' service", () => {
  it("registered the service", () => {
    const service = app.service("api/workout");

    assert.ok(service, "Registered the service");
  });
});
