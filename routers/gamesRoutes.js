import { Router } from "express";
import { GetGames } from "../controllers/controllerGetGames.js";
import { PostGame } from "../controllers/controllerPostGame.js";
import { validatorGamesReq } from "../middlewares/middlewareGames.js";

const gamesRoutes = Router();

gamesRoutes.get("/games", GetGames);
gamesRoutes.post("/games", validatorGamesReq, PostGame);

export default gamesRoutes;
