const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/controllers');
const cookieParser = require('cookie-parser');

const app = express();
const path = require('path');
const session = require('express-session');

//allows cors errors to be bypassed
app.use(cors());

//body parser to allow req body post from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//fake users to test auth
// const fkUsers = [
//   {id: 1, firstname: 'Alex', lastname: 'Smith' , email: 'foo@bar.com' , password: 'littleteapot'},
//   {id: 2, firstname: 'Fernando', lastname: 'Fijk' , email: 'food@bard.com' , password: 'bigTeapot'},
// ]

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
app.put('/signup', userController.signup, userController.createTemplate, (req, res) => {
    //console log to check signin is active 
    // console.log('signup  middleware is functioning');
    // console.log('This is your req body entry: ', req.body);
    // console.log(res.locals.userId);
    console.log("return to sender")
    res.status(200).send();
});


//recieving state userdata from front end at login
app.post('/login', (req, res) => {
    //console log to check login is active 
    console.log('login entry middleware is functioning');
    // console.log('This is your req body entry: ', req.body);

    //redirect to applcation *** TODO ***
    // res.redirect('http://localhost:3000/api');
    

    //sucessful post request status
    res.status(200).send();
});




// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.listen(4000, () => {
  console.log('****** Listening on Port 4000 ******');
});
