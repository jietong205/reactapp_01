const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("DATABASE CONNECTED SUCCESSFULLY")
);

app.use(express.json());
//help to pass incoming outgoing requests --> body parser activated
app.use(cors());
app.use("/app", routesUrls);
//init router by middleware
app.listen(4000, () => console.log("server is up and running"));

// server (listen) -> router (post)
