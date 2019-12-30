const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/controllers');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const session = require('express-session');

const PORT = 4000;

//allows cors errors to be bypassed
// Todo: Not sure about cors yet;
//?
//*
//!
app.use(cors());

//body parser to allow req body post from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')))
// app.get('/', (req, res) => res.send('Hello!'))
//cookies
app.use(session({
  name: 'sessid',
  resave: false,
  saveUninitialized: false,
  secret: 'secretstring',
  cookie: { 
    secure: true,
    maxAge: 1000*60*2,
    sameSite: true,
  }
}))

//redirect protection function - if user is not authenticated redirect to login
const redirectLogin = (req,res,next) => {
};


//recieving state userdata from front end at signin
app.post('/signup', userController.signup, (req, res) => {
res.send('heloo');
});

// app.get('/signup', (req, res) => res.sendFile());

//recieving state userdata from front end at login
app.post('/login', userController.login, (req, res) => {
  res.json(res.locals.message);
    console.log('login entry middleware is functioning');
    // Todo: Need to remove the alert, you have successfully logged in
    // todo: because it is alerting the client with wrong login credentials
    //  self.location = 'http://google.com';
    // window.location.assign('http://google.com');
    //sucessful post request status
    // res.sendFile(path.resolve(__dirname, '../public/serveme.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log('****** Listening on Port 4000 ******');
});
