import express from "express";
import {
  sortBusinessesByProximity,
} from "./routes/discoveryRoutes";

const app = express();
const port = 3000;

app.use(express.json());

//GET /discovery?lat=X&long=Y&limit=Z&type=Coffee //the last two are optional
app.get("/discovery", sortBusinessesByProximity);

let server: any;

export { app };

//start and stopServer and set as functions to allow healthy start/stop during tests
export const startServer = () => {
  server = app.listen(port, () => {
    console.info(`Server started on port ${port}`);
  });
};

export const stopServer = () => {
  server.close(() => {});
};

// Start the server automatically when this file is run directly
if (require.main === module) {
  startServer();
}