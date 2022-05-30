import db from "../db.js";

export async function GetCustomers(req, res) {
  let reqQuery = req.query;

  if (reqQuery.cpf) {
    let cpfQuery = await db.query(
      `SELECT * FROM  customers WHERE cpf LIKE '${reqQuery.cpf}%'`
    );
    return res.send(cpfQuery.rows);
  }

  let cpfGet = await db.query("SELECT * FROM  customers ");

  res.send(cpfGet.rows);
}
