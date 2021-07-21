import express, { Application, Request, Response } from "express";
import moviesModule from "./routes/movies.route";
import charactersModule from "./routes/characters.route";
import planetsModule from "./routes/planets.route";
import starshipsModule from "./routes/starships.routes";
import vehiclesModule from "./routes/vehicles.route";
import commentModule from "./routes/comment.route";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "../swagger.json",
    },
  })
);
app.use("/api/movies", moviesModule);
app.use("/api/characters/movies", charactersModule);
app.use("/api/planets/movies", planetsModule);
app.use("/api/starships/movies", starshipsModule);
app.use("/api/vehicles/movies", vehiclesModule);
app.use("/api/comments/movies", commentModule);

app.listen(port, () => console.log(`Running on a port ${port}`));
