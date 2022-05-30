import { Router } from "express";
import { GetCategories } from "../controllers/controllerGetCategories.js";
import { PostCategories } from "../controllers/controlerPostCategories.js";
const categoriesRoute = Router();

categoriesRoute.get("/categories", GetCategories);
categoriesRoute.post("/categories", PostCategories);

export default categoriesRoute;
