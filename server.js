const express = require("express");
require("dotenv").config();
const db_connect = require("./Utils/dbconfig");
const routes = require("./routes/api");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.get("/", (req, res) => {
  res.send("Hi");
});
app.use("/", routes);

db_connect().then(() => {
  app.listen(3001, "0.0.0.0", () => {
    console.log("Server started on port 3001");
  });
});
