import db from "../db.js";

export async function GetGames(req, res) {
  const paramsReq = req.params.name;
  if (req.query.name.length > 0) {
    const gamesListParams = await db.query(
      `SELECT * FROM games WHERE name LIKE '${req.params.name}%'`
    );
    return res.send(gamesListParams.rows);
  }
  const gamesList = await db.query(
    "SELECT games.*,categories.name as categorie FROM games JOIN categories ON games.categories_id= categories.ids_categories"
  );

  res.send(gamesList.rows);
}
