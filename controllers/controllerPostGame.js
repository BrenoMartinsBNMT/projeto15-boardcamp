import Joi from "joi";
import db from "../db.js";

export async function PostGame(req, res) {
  let { name, categoryId, image, stockTotal, pricePerDay } = req.body;

  await db.query(
    "INSERT INTO games (name,image,stocktotal,priceperday,categories_id) VALUES ($1,$2,$3,$4,$5)",
    [name, image, stockTotal, pricePerDay, categoryId]
  );
  res.send(201);
}
