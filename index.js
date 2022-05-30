import express, { json } from "express";
import cors from "cors";
import categoriesRoute from "./routers/categoriesRoutes.js";
import gamesRoutes from "./routers/gamesRoutes.js";
import customersRoutes from "./routers/customersRoutes.js";

const app = express();

app.use(json());
app.use(cors());
app.use(categoriesRoute);
app.use(gamesRoutes);
app.use(customersRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor em pé na porta ${port}`));
