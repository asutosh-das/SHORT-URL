const express = require("express");
const path = require("path");
const { connectToMongooDB } = require("./connect");
const cookieParser = require("cookie-parser");

const { checkForAuthentication, restrictTo } = require("./middlewares/auth");

const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8001;
const URL = require("./models/url");

connectToMongooDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    console.log("MongoDB ERROR: Is MongoDB running? ", err.message),
  );

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/", staticRoute);
// app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

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
