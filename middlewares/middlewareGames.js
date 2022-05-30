import Joi from "joi";
import db from "../db.js";

export async function validatorGamesReq(req, res, next) {
  const reqGames = req.body;

  const reqSchema = Joi.object({
    name: Joi.string().min(1).required(),
    image: Joi.string()
      .pattern(/^https?:\/\//)
      .required(),
    stockTotal: Joi.number().min(1).required(),
    categoryId: Joi.number().required(),
    pricePerDay: Joi.number().min(1).required(),
  });

  const reqValidation = reqSchema.validate(reqGames);

  if (reqValidation.error) {
    return res.send(422, reqValidation.error.details);
  }
  let { name, categoryId } = reqGames;
  const existCategorie = await db.query(
    "SELECT ids_categories FROM categories WHERE ids_categories = $1",
    [categoryId]
  );
  console.log(existCategorie);
  if (existCategorie.rows.length === 0) {
    return res.sendStatus(400);
  }
  const existName = await db.query("SELECT name FROM games WHERE  name = $1", [
    name,
  ]);
  if (existName.rows.length > 0) {
    return res.sendStatus(409);
  }
  next();
}
