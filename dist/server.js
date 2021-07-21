"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_route_1 = __importDefault(require("./routes/movies.route"));
const characters_route_1 = __importDefault(require("./routes/characters.route"));
const planets_route_1 = __importDefault(require("./routes/planets.route"));
const starships_routes_1 = __importDefault(require("./routes/starships.routes"));
const vehicles_route_1 = __importDefault(require("./routes/vehicles.route"));
const comment_route_1 = __importDefault(require("./routes/comment.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const app = express_1.default();
const port = process.env.PORT || 7000;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "../swagger.json",
    },
}));
app.use("/api/movies", movies_route_1.default);
app.use("/api/characters/movies", characters_route_1.default);
app.use("/api/planets/movies", planets_route_1.default);
app.use("/api/starships/movies", starships_routes_1.default);
app.use("/api/vehicles/movies", vehicles_route_1.default);
app.use("/api/comments/movies", comment_route_1.default);
app.listen(port, () => console.log(`Running on a port ${port}`));
