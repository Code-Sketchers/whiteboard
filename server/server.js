const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/controllers");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const session = require("express-session");

//allows cors errors to be bypassed
// Todo: Not sure about cors yet;
//?
//*
//!
app.use(cors());

//body parser to allow req body post from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../public/index.html"))
);

app.get("/stylesheet", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.css"));
});

//cookies
app.use(
  session({
    name: "sessid",
    resave: false,
    saveUninitialized: false,
    secret: "secretstring",
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 2,
      sameSite: true
    }
  })
);

//redirect protection function - if user is not authenticated redirect to login
const redirectLogin = (req, res, next) => {};

//recieving state userdata from front end at signin
// app.put('/signup', userController.signup, userController.createTemplate, (req, res) => {
//     console.log("return to sender")
//     res.status(200).send();
// });

// app.get('/signup', (req, res) => res.sendFile());

//recieving state userdata from front end at login
app.post("/login", (req, res) => {
  console.log("login entry middleware is functioning");

  //sucessful post request status
  res.status(200).send();
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.listen(4000, () => {
  console.log("****** Listening on Port 4000 ******");
});
