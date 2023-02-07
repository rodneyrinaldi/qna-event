const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: "./migrations",
    force: "last",
  });

  const questions = await db.all("select * from questions");
  console.log("all questions", JSON.stringify(questions, null, 2));
}

setup();
