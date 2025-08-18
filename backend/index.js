const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db;
(async () => {
  db = await sqlite.open({
    driver: sqlite3.Database,
    filename: "products.sqlite",
  });

  await db.run("PRAGMA foreign_keys = ON");
})();

app.get("/all", (request, response) => {
  db.all("SELECT * FROM product").then((product) => {
    response.send(product);
  });
});

app.get("/:category_id", (request, response) => {
  db.all("SELECT * FROM product WHERE category_id=?", [
    request.params.category_id,
  ]).then((product) => {
    response.send(product);
  });
});

app.post("/subscribe", async (request, response) => {
  let email = request.body.email;

  console.log(email);
  const sql = `INSERT INTO subscriber (email) VALUES (?)`;
  db.run(sql, [email]);
  response.status(201).send();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Ready!");
});
