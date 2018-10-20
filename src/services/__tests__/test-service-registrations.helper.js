const app = require("../../app");

export function testServiceRegistrations(serviceNames) {
  serviceNames.forEach(serviceName => testServiceRegistration(serviceName));
}

function testServiceRegistration(serviceName) {
  describe(`'${serviceName}' service`, () => {
    it("registered the service", () => {
      const service = app.service(`api/${serviceName}`);

      expect(service).toBeTruthy();
    });
  });
}
