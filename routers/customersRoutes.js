import { Router } from "express";
import { GetCustomers } from "../controllers/controllerGetCustomers.js";
import { GetCustomersById } from "../controllers/controllerGetCustomersById.js";
import { ValidatorCustomers } from "../middlewares/middlewareCustomers.js";

const customersRoutes = Router();

customersRoutes.get("/customers", GetCustomers);
customersRoutes.get("/customers/:id", GetCustomersById);
customersRoutes.post("/customers", ValidatorCustomers);

export default customersRoutes;
