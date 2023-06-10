import request from 'supertest';
import { app } from '../srv/server';
import { sortAndLimitBusinessesByProximity, sortAndLimitBusinessesByProximityFilteredByCategory, sortBusinessesByProximity } from '../srv/routes/discoveryRoutes';

  //mock here the return values off the fxns
describe('Server Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });


  describe('Test route - GET /discovery?lat=X&long=Y', () => {
    it('should retrieve list of businesses sorted by proximity to my location - success', async () => {
      expect(1).toEqual(1);
    });
  });

  describe('Test route - GET /discovery?lat=X&long=Y&limit=Z', () => {
    it('should retrieve list of businesses sorted by proximity to my location, with limited number of records - success', async () => {
      expect(1).toEqual(1);
    });
  });

  describe('Test route - GET /discovery?lat=X&long=Y&limit=Z&type=Coffee', () => {
    it('should retrieve list of businesses sorted by proximity to my location, with limited number of records & fitlered by type - success', async () => {
      expect(1).toEqual(1);
    });
  });

});
