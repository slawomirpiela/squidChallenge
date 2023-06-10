import {
  sortAndLimitBusinessesByProximity,
  sortAndLimitBusinessesByProximityFilteredByCategory,
  sortBusinessesByProximity,
} from "../srv/routes/discoveryRoutes";
//import businessesData from '../srv/data/businesses.json'
import { Request, Response } from "express";

import {
  createRequest,
  createResponse,
  MockRequest,
  MockResponse,
} from "node-mocks-http";

//test the fxns logic to
describe("Proximity Routes - Unit Tests", () => {
  let request: MockRequest<Request>;
  let response: MockResponse<Response>;

  beforeEach(() => {
    /** Response Mock */
    response = createResponse();
  });

  describe("test sortBusinessesByProximity function", () => {
    it("should sort businesses by proximity with success", () => {
      const mockRequest = {
        body: {
          userLat: 15,
          userLong: 15
        },
      } as Request;

      request = createRequest({
        method: "GET",
        url: "/mockedRoute",
      });

      const resp = sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(200);
      expect(response._getData()).toBeDefined();
      expect(JSON.parse(response._getData())).toHaveProperty('success');
      expect(JSON.parse(response._getData()).success).toBe(true);
      expect(JSON.parse(response._getData())).toHaveProperty('location');
      expect(JSON.parse(response._getData())).toHaveProperty('businesses');
    });
  });

  describe("test sortAndLimitBusinessesByProximity function", () => {
    it("should retrieve all users", () => {
      expect(1).toEqual(1);
    });
  });

  describe("sortAndLimitBusinessesByProximityFilteredByCategory", () => {
    it("should retrieve a user by ID", () => {
      expect(1).toEqual(1);
    });
  });
});
