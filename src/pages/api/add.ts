import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getAllQuestions(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  })

  const data = { name: req.body.name }
  const datastring = "insert into questions(name) values(?)"
  const param = [data.name]

  const questions = db.run(datastring, param, function (err, result) {
    if (err) {
      res.status(400).json({ "error": err.message })
      return;
    }
    res.json({
      "message": "success",
    })
  });


  res.status(200).json(questions);
}
