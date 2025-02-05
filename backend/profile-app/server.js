require("dotenv").config();
const express = require("express");
//const https = require("https");
//const http = require("http");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

//ADDITIONAL FOR BANK APP
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");
const md5 = require("md5");
const winston = require("winston");

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
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser()); //ADDITIONAL FOR BANK APP
app.use(express.static("public")); //ADDITIONAL FOR BANK APP

//ADDITIONAL FROM BANK APP ------------
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "bank-app" },
  transports: [
    new winston.transports.File({
      filename: "./backend/logs/application.log",
      level: "error",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
    }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
    }),
  ],
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

console.log("Connecting to the database with host:", process.env.DB_HOST);
//------------------------------------

app.use("/bank", express.static(path.join(__dirname, "../apps/bank/build")));
app.use("/bank/img", express.static(path.join(__dirname, "public/img")));

//ADDITIONAL FROM BANK APP ------------
//LIST
//app.get('/bank'
app.get("/bank/api/accounts", (req, res) => {
  const sql = `
  SELECT id, image, name, surname, balance, blocked
  FROM accounts`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

//CREATE
// app.post('/bank'
app.post("/bank/api/create", (req, res) => {
  console.log("Received file:", req.body.file ? "YES" : "NO");
  console.log("File path:", "./public/img/" + fileName);

  const fileName = req.body.file ? uuidv4() + ".png" : null;
  if (fileName) {
    const file = Buffer.from(
      req.body.file.replace("data:image/png;base64,", ""),
      "base64"
    );
    fs.writeFileSync("./public/img/" + fileName, file);
  }
  console.log("fileName:", fileName);
  const sql = `
    INSERT INTO accounts (image, name, surname, balance)
    VALUES (?, ?, ?, ?)
    `;
  connection.query(
    sql,
    [fileName, req.body.name, req.body.surname, req.body.balance],
    (err) => {
      if (err) throw err;
      res.json({ message: "Account created successfully!" });
      console.log("Account creation response sent");
    }
  );
});

//DELETE
//app.delete('/bank/:id'
app.delete("/bank/api/delete/:id", (req, res) => {
  let sql = `
    SELECT image
    FROM accounts
    WHERE id = ?`;
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result[0].image) {
      fs.unlinkSync("./public/img/" + result[0].image);
    }
  });
  const deleteSql = `
    DELETE FROM accounts
    WHERE id = ?
    `;
  connection.query(deleteSql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Account deleted successfully!" });
    console.log("Account deleting response sent");
  });
});

// REDUCE BALANCE BY 5
// app.put('/reduceBalances'
app.put("/bank/api/reduceBalances", (req, res) => {
  const sql = `
  UPDATE accounts
  SET balance = balance - 5`;
  connection.query(sql, (err) => {
    if (err) throw err;
    res.json({ message: "Balances reduced successfully!" });
  });
});

//EDIT
//app.put('/bank/:id'
app.put("/bank/api/edit/:id", (req, res) => {
  const fileName = req.body.file ? uuidv4() + ".png" : null;
  let updateFields = "name = ?, surname = ?, balance = ?";
  let queryParams = [
    req.body.name,
    req.body.surname,
    req.body.balance,
    req.params.id,
  ];

  if (fileName) {
    const file = Buffer.from(
      req.body.file.replace("data:image/png;base64,", ""),
      "base64"
    );
    fs.writeFileSync("./public/img/" + fileName, file);
    updateFields = "image = ?, " + updateFields;
    queryParams.unshift(fileName);
  }

  console.log("fileName:", fileName);
  const editSql = `
    UPDATE accounts
    SET ${updateFields}
    WHERE id = ?
    `;
  connection.query(editSql, queryParams, (err) => {
    if (err) throw err;
    res.json({ message: "Account was changed successfully!" });
  });
});

// BLOCK ACCOUNT
//app.put('/bank/block/:id'
app.put("/bank/api/block/:id", (req, res) => {
  const sql = `
  UPDATE accounts
  SET blocked = 1
  WHERE id = ?
  `;
  connection.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Account blocked successfully!" });
  });
});

// UNBLOCK ACCOUNT
//app.put('/bank/unblock/:id'
app.put("/bank/api/unblock/:id", (req, res) => {
  const sql = `
  UPDATE accounts
  SET blocked = 0
  WHERE id = ?
  `;
  connection.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Account unblocked successfully!" });
  });
});

//-------AUTHENTICATION FOR BANK APP---------------

// //COOCKIES
// app.post("/bank/api/cookies", (req, res) => {
//   if (req.body.delete) {
//     res.cookie("Cookies: ", req.body.cookie, { maxAge: -3600 });
//   } else {
//     res.cookie("Cookies: ", req.body.cookie, { maxAge: 3600 }); //pasiimam info is set funkcijos
//   }

//   res.json({ message: "ok" });
// });

//REGISTER
//app.post('/register'
app.post("/bank/api/register", (req, res) => {
  const sql1 = `
    SELECT * FROM users
    WHERE name = ?`;
  const sessionId = uuidv4();
  logger.info(`Checking availability for username: ${req.body.userName}`);
  connection.query(sql1, [req.body.userName], (err, result) => {
    if (err) {
      logger.error(`Database error during username check: ${err.message}`);
      res.status(500).json({
        status: "error",
        message: "An internal server error occured.",
      });
    } else if (result.length > 0) {
      logger.warn(
        `Registration attempt with existing username: ${req.body.userName}`
      );
      res.status(409).json({
        status: "error",
        message: "Username is already taken",
      });
    } else {
      logger.info(`Username available for registration: ${req.body.userName}`);
      const sql2 = `
            INSERT INTO users (name, password, session)
            VALUES (?, ?, ?)
            `;
      connection.query(
        sql2,
        [req.body.userName, md5(req.body.userPsw), sessionId],
        (err, result) => {
          if (err) {
            logger.error(
              `Database error during user registration: ${err.message}`
            );
            res.status(500).json({
              status: "error",
              message: "Registration failed due to a server error.",
            });
          } else if (result.affectedRows) {
            logger.info(`User registered successfully: ${req.body.userName}`);
            res.json({ status: "valid", message: "Registration successful" });
          } else {
            logger.warn(
              `Unexpected result during registration for user: ${req.body.userName}`
            );
            res.status(500).json({
              status: "error",
              message: "Registration failed due to an unexpected error.",
            });
          }
        }
      );
    }
  });
});

//LOGIN
app.post("/bank/api/login", (req, res) => {
  const sessionId = uuidv4();
  //updatinam sesija
  const sql = `
    UPDATE users
    SET session = ?
    WHERE name = ? AND password = ?
    `;
  connection.query(
    sql,
    [sessionId, req.body.userName, md5(req.body.userPsw)],
    (err, result) => {
      if (err) throw err;

      if (result.affectedRows) {
        res.cookie("bankSession", sessionId);
        res.json({
          status: "valid",
          getName: req.body.userName,
        });
      } else {
        res.json({
          status: "error",
        });
      }
    }
  );
});

app.get("/bank/api/login", (req, res) => {
  const sql = `
    SELECT name
    FROM users
    WHERE session = ?
    `;
  connection.query(sql, [req.cookies.bankSession || ""], (err, result) => {
    if (err) throw err;

    if (result.length) {
      //jei rezultatas yra masyvas
      res.json({
        status: "valid",
        getName: result[0].name, //jei radom, tai paimam pirm1 objekto reiksme
      });
    } else {
      res.json({
        status: "error",
      });
    }
  });
});

app.post("/bank/api/logout", (req, res) => {
  res.cookie("bankSession", "");
  res.json({
    status: "logout",
  });
});

app.get("/bank/*", (req, res) => {
  console.log("Serving Bank App...");
  res.sendFile(path.join(__dirname, "../apps/bank/build", "index.html"));
});

app.use(express.static(path.join(__dirname, "../apps/profile-app/build")));
app.get("*", (req, res) => {
  console.log("Inside catch-all route");
  res.sendFile(path.join(__dirname, "../apps/profile-app/build", "index.html"));
});

//-------------------------------------

if (process.env.NODE_ENV !== "production") {
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
