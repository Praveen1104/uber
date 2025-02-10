const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const ConnectToDb = require("./db/db");
const userRouter = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");
const app = express();

ConnectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/users", userRouter);
module.exports = app;
