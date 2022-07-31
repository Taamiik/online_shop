require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const router = require("./router");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", router);

const start = async () => {
  await mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.listen(PORT, () => console.log(`Server started on ${PORT} PORT`));
};

start();
