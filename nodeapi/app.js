const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5500;
const userRoutes = require("./routes/user");
require("dotenv").config();
// console.log(process.env)
app.use(express.json());
app.use(cors());

app.use(
  "/assets/images",
  express.static(path.join(__dirname, "assets/images"))
);

mongoose.connect(process.env.MongoDB);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connect error:"));
db.once("open", () => {
  console.log("connected to MongoDB");
});

app.use("/api/users", userRoutes);
app.listen(process.env.PORT || 4500, () => {
  console.log(`app listening on port ${port}`);
});
