import db from "../db.js";

export async function PostCategories(req, res) {
  let { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  let categorieExist = await db.query(
    `SELECT name FROM  categories WHERE name=$1`,
    [name]
  );

  if (categorieExist.rowCount > 0) {
    console.log(categorieExist.rowCount);
    return res.sendStatus(409);
  }

  await db.query(`INSERT INTO categories (name) VALUES ($1);`, [name]);

  res.sendStatus(201);
}
