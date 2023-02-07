import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getAllQuestions(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  })

  const sql = "select * from questions"
  const params = []

  const questions = await db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
  });

  res.status(200).json(questions);
}
