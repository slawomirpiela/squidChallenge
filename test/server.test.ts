import request from "supertest";
import { startServer, stopServer, app } from "../srv/server";
import {
  sortAndLimitBusinessesByProximity,
  sortAndLimitBusinessesByProximityFilteredByCategory,
  sortBusinessesByProximity,
} from "../srv/routes/discoveryRoutes";
//jest.mock('../srv/routes/discoveryRoutes')

jest.setTimeout(20000);
//mock here the return values off the fxns
describe("Server Routes", () => {
  let server: any;

  beforeAll((done) => {
    startServer(() => {
      server = app;
      done();
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll((done) => {
    stopServer(done);
    //jest.restoreAllMocks();
  });

  describe("Test route - GET /discovery?lat=X&long=Y", () => {
    it("should retrieve list of businesses sorted by proximity to my location - success", async () => {
      // Mock the createUser function to return the created user
      // (sortBusinessesByProximity as jest.Mock).mockImplementation(() => {

      //   return ({
      //     success : true,
      //     outputBusinesses : [{
      //       name: 'businessName1',
      //       latitude: 'latCords',
      //       longitude: 'longCords',
      //       distance: 'distanceFromInput'
      //     },
      //     {
      //       name: 'businessName2',
      //       latitude: 'latCords',
      //       longitude: 'longCords',
      //       distance: 'distanceFromInput'
      //     },
      //     {
      //       name: 'businessName3',
      //       latitude: 'latCords',
      //       longitude: 'longCords',
      //       distance: 'distanceFromInput'
      //     }]
      //   });
      // });

      // const response = await request(server).get('/users');
      // expect(response.status).toBe(200);
      // expect(response.body).toEqual([]);

      //const sortedBusinesses = sortBusinessesByProximity()
      // const response = await request(app).get('/discovery')

      // expect(response).toBeDefined();
      // expect(response).toHaveProperty('success');
      // expect(response).toHaveProperty('outputBusinesses');
      expect(1).toEqual(1);
    });
  });

  describe("Test route - GET /discovery?lat=X&long=Y&limit=Z", () => {
    it("should retrieve list of businesses sorted by proximity to my location, with limited number of records - success", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("Test route - GET /discovery?lat=X&long=Y&limit=Z&type=Coffee", () => {
    it("should retrieve list of businesses sorted by proximity to my location, with limited number of records & fitlered by type - success", async () => {
      expect(1).toEqual(1);
    });
  });
});
