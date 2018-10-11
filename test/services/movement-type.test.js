const assert = require("assert")
const app = require("../../src/app")

describe("'movement-type' service", () => {
  it("registered the service", () => {
    const service = app.service("movement-type")

    assert.ok(service, "Registered the service")
  })
})
