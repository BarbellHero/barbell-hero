import app from "../src/app.js";
import rp from "request-promise";
import url from "url";

const port = app.get("port");
const getUrl = pathName =>
  url.format({
    hostname: app.get("host") || "localhost",
    protocol: "http",
    port,
    pathName
  });
let server;

beforeAll(() => {
  server = app.listen(port);
  return new Promise(resolve => server.once("listening", resolve));
});

afterAll(() => {
  return new Promise(resolve => server.close(resolve));
});

test("application starts and shows index page", () => {
  return rp(getUrl()).then(body => {
    expect(body).toEqual(expect.stringMatching(/<\/html>/));
  });
});
