require("dotenv").config();
const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();

const sslOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH),
};

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../apps/profile-app/build")));

app.get("*", (req, res) => {
  console.log("Inside catch-all route");
  res.sendFile(path.join(__dirname, "../apps/profile-app/build", "index.html"));
});

if (process.env.NODE_ENV !== "production") {
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
  });
}

const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const HTTP_PORT = process.env.HTTP_PORT || 80;

https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
  console.log(`HTTPS server running at https://0.0.0.0:${HTTPS_PORT}`);
});

const redirectApp = express();
redirectApp.get("*", (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});
http.createServer(redirectApp).listen(HTTP_PORT, () => {
  console.log(`Redirect server running at http://0.0.0.0:${HTTP_PORT}`);
});
