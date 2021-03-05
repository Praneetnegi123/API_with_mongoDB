const express = require("express");
const app = express();
var bodyParser = require("body-parser");
let db = require("./modal/dataBase");
//! parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//! parse application/json
app.use(bodyParser.json());


//! Retrive all data
app.get("/user", async (req, res) => {
  console.log(db);
  let data = await db.find();
  res.send(data);
});

//! Retreive a specific data from id
app.get("/user/:id", async (req, res) => {
  let id = Number(req.params.id);
  let data = await db.findOne({ id: id });
  res.send(data);
});

//! add Data
app.post("/user", (req, res) => {
  db.insertMany(req.body);
  res.send("Successfully Added User");
});

//! update a data
app.put("/user/:id", async (req, res) => {
  let id = Number(req.params.id);
  await db.updateOne(
    { id: id },
    { $set: { name: req.body.name, email: req.body.email } }
  );
  res.send("Updated Successfully!");
});


//! Delete a Particular user
app.delete("/user/:id", async (req, res) => {
  let id = Number(req.params.id);
  await db.deleteMany({ id: id });
  res.send("User Deleted!");
});

//!Port : 8080
app.listen(8080, () => {
  console.log("Running at Port '8080'");
});
