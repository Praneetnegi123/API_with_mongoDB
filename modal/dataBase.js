const mongoose = require("mongoose");
let Schema = mongoose.Schema;

//!connect a mongo database with mongoose
mongoose.connect("mongodb://localhost:27017/five", { useNewUrlParser: true });

const db = mongoose.model(
  "data",
  new Schema({
    id: { type: Number, unique: [true, "id is already Present"] },
    name: String,
    email: String,
  })
);

//!export a db varriable
module.exports = db;
