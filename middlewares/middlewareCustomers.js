import JoiBase from "joi";
import JoiDate from "@joi/date";

import db from "../db.js";

export async function ValidatorCustomers(req, res, next) {
  const Joi = JoiBase.extend(JoiDate);
  const reqBody = req.body;

  const schemaBody = Joi.object({
    name: Joi.string().empty().required(),
    phone: Joi.string().max(11).required(),
    cpf: Joi.string().max(11).required(),
    birthday: Joi.date().format("YYYY/MM/DD").required().raw(),
  });

  const infosValidated = schemaBody.validate(reqBody);

  if (infosValidated.error) {
    return res.sendStatus(4);
  }

  let hasUser = await db.query("SELECT name FROM  customers WHERE  name = $1", [
    reqBody.name,
  ]);

  if (hasUser.rowCount > 0) {
    return res.sendStatus(409);
  }

  next();
}
