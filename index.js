const express = require("express");
const path = require("path");
const { connectToMongooDB } = require("./connect");

const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;
const URL = require("./models/url");

connectToMongooDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected"),
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", staticRoute);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.use("/url", urlRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timeStamp: Date.now() },
      },
    },
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT:${PORT}`);
});
