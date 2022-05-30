import db from "../db.js";

export async function GetCustomersById(req, res) {
  let reqParams = req.params;

  let clientId = await db.query(
    `SELECT id_customers FROM customers WHERE id_customers = $1`,
    [reqParams.id]
  );

  if (!clientId.rowCount > 0) {
    res.sendStatus(404);
  }

  if (clientId.rowCount > 0);
  {
    res.send(clientId.rows);
  }
}
