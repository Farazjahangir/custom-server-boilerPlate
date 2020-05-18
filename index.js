const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "dev.env") });

app.use(express.json({ limit: "50mb" }));

require('./src/routes')(app)

app.get('/ping' , (req,res) => {
  res.json({ message: "Ping Success" })
})
app.use((err, req, res, next) => {
  err.message = globalHelpers.handleMoongooseValidation(err.message);
  console.log("ERRR", err);
  res.status(err.status || 400).json({ ...err, success: false });
});

app.listen(process.env.PORT, () => {
  console.log(`Port Listens on ${process.env.PORT}`);
});
