import { startServer, stopServer } from "../srv/server";
import { Request, Response } from "express";
import { createRequest, createResponse, MockRequest, MockResponse } from "node-mocks-http";
import {
  sortBusinessesByProximity,
} from "../srv/routes/discoveryRoutes";

jest.setTimeout(10000);
//mock here the return values off the fxns
describe("Server Routes", () => {
  let request: MockRequest<Request>;
  let response: MockResponse<Response>;

  // Runs before all tests
  beforeAll(() => {
    startServer();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    response = createResponse();
  });

  afterAll(() => {
    stopServer();
  });

  describe("Test route - GET /discovery?lat=X&long=Y", () => {
    it("should trigger the correct route", async () => {

      //mock the route handler function
      jest.mock("../srv/routes/discoveryRoutes", () => ({
        sortBusinessesByProximity: jest.fn(),
      }));

      //create server request
      request = createRequest({
        method: "GET",
        url: "/discovery?lat=53.341234&long=-6.258765&type=Coffee&limit=5",
      });

      expect(response._getStatusCode()).toBe(200);

    });
  });

});
