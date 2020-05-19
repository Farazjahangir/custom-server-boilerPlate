const express = require("express");
const app = express();
const path = require("path");

const globalHelpers = require("./src/utils/globalHelpers");

require("dotenv").config({ path: path.join(__dirname, "dev.env") });

require("./src/config/db");
const keys = require("./src/config/keys");

app.use(express.json({ limit: "50mb" }));

require("./src/routes")(app);

app.get("/ping", (req, res) => {
  res.json({ message: "Ping Success" });
});
app.use((err, req, res, next) => {
  err.message = globalHelpers.handleMoongooseValidation(err.message);
  console.log("ERRR", err);
  res.status(err.status || 400).json({ ...err, success: false });
});

app.listen(keys.PORT, () => {
  console.log(`Port Listens on ${keys.PORT}`);
});
