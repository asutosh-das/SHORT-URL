const express = require("express");
const { connectToMongooDB } = require("./connect");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

connectToMongooDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected"),
);

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT:${PORT}`);
});
