import {
  sortBusinessesByProximity,
} from "../srv/routes/discoveryRoutes";

import { Request, Response } from "express";
import { createRequest, createResponse, MockRequest, MockResponse } from "node-mocks-http";

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

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=53.341234&long=-6.258765",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(200);
      expect(response._getData()).toBeDefined();
      const retrievedData = JSON.parse(response._getData())
      expect(retrievedData).toHaveProperty("success");
      expect(retrievedData.success).toBe(true);
      expect(retrievedData).toHaveProperty("closestBusinesses");
    });

    it("should return a 400 Bad Request because coordinates are invalid - latitute is not a number!", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=human&long=-999.258765",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(400);
      expect(response._getData()).toBeDefined();
      expect(response._getData()).toBe('Invalid latitude or longitude');
    });

    it("should return a 400 Bad Request because coordinates are invalid - longitude is not a number!", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=199&long=erroredLongVal",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(400);
      expect(response._getData()).toBeDefined();
      expect(response._getData()).toBe('Invalid latitude or longitude');
    });

    it("should return a 400 Bad Request because coordinates are invalid - latitute is a number but not a valid coordinates!", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=-199&long=-999.258765",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(400);
      expect(response._getData()).toBeDefined();
      expect(response._getData()).toBe('Invalid latitude or longitude');
    });

    it("should return a 400 Bad Request because coordinates are invalid", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=0.341234&long=-999.258765",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(400);
      expect(response._getData()).toBeDefined();
      expect(response._getData()).toBe('Invalid latitude or longitude');
    });


    it("should return a 400 Bad Request error while trying to sort businesses by proximity", () => {
      request = createRequest({
        method: "GET",
        url: "/discovery",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(400);
      expect(response._getData()).toBeDefined();
      expect(response._getData()).toBe("Invalid basic query parameters - Please check you're providing the right coordinates");
    });
  });

  describe("test sortAndLimitBusinessesByProximity function with limiting parameter", () => {
    it("should sort businesses by proximity & limit results with success", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=53.341234&long=-6.258765&limit=5",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(200);
      expect(response._getData()).toBeDefined();
      const retrievedData = JSON.parse(response._getData())
      expect(retrievedData).toHaveProperty("success");
      expect(retrievedData.success).toBe(true);
      expect(retrievedData).toHaveProperty("closestBusinesses");
    });

    it("should sort businesses by proximity & but ignore the limit number as its invalid", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=53.341234&long=-6.258765&limit=five",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(200);
      expect(response._getData()).toBeDefined();
      const retrievedData = JSON.parse(response._getData())
      expect(retrievedData).toHaveProperty("success");
      expect(retrievedData.success).toBe(true);
      expect(retrievedData).toHaveProperty("closestBusinesses");
    });

  });

  describe("test sortAndLimitBusinessesByProximity function with filter parameter", () => {
    it("should sort businesses by proximity & limit & filter results with success", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=53.341234&long=-6.258765&type=Coffee&limit=15",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(200);
      expect(response._getData()).toBeDefined();
      const retrievedData = JSON.parse(response._getData())
      expect(retrievedData).toHaveProperty("success");
      expect(retrievedData.success).toBe(true);
      expect(retrievedData).toHaveProperty("closestBusinesses");
    });

    it("should sort businesses by proximity & limit but ignore filter as its invalid", () => {

      request = createRequest({
        method: "GET",
        url: "/discovery?lat=53.341234&long=-6.258765&type=Kava&limit=15",
      });

      sortBusinessesByProximity(request, response);

      expect(response._getStatusCode()).toEqual(200);
      expect(response._getData()).toBeDefined();
      const retrievedData = JSON.parse(response._getData())
      expect(retrievedData).toHaveProperty("success");
      expect(retrievedData.success).toBe(true);
      expect(retrievedData).toHaveProperty("closestBusinesses");
    });

  });

});
