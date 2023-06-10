import express, { Request, Response } from 'express';
import { sortAndLimitBusinessesByProximity, sortAndLimitBusinessesByProximityFilteredByCategory, sortBusinessesByProximity } from './routes/discoveryRoutes';

const app = express();
const port = 3000;

app.use(express.json());

//GET /discovery?lat=X&long=Y
app.get('/discovery/:id', sortBusinessesByProximity);

//GET /discovery?lat=X&long=Y&limit=Z
app.get('/discovery', sortAndLimitBusinessesByProximity);

//GET /discovery?lat=X&long=Y&limit=Z&type=Coffee
app.get('/discovery', sortAndLimitBusinessesByProximityFilteredByCategory);

let server: any;

export { app };

export const startServer = (callback: () => void) => {
  server = app.listen(port, callback);
};

export const stopServer = (callback: () => void) => {
  server.close(callback);
};
