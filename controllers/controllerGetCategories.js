import db from "../db.js";
export async function GetCategories(req, res) {
  const allCategories = await db.query("SELECT * FROM categories");
  res.send(allCategories.rows);
}
