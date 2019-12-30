const models = require('../models/models.js');
const { User } = models;
const { Template } = models;
const userController = {};

const bcrypt = require('bcryptjs');

// const templateController = {};

//api.get('/signup', userController.signup, usercOntorller.makeCookie, userController.intializeTemplates, userController.singup...)


userController.signup = (req, res, next) => {
  // console.log(req.body);
  console.log("start signup")
  // console.log(req.body);
  // Todo: Where bcrypt should be placed;
  const { firstName, lastName, email, password } = req.body;
  //bcrypt functionality to turn the password to a hash
  // Todo: check the number rounds appropriate for the hashing;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) return next(err);

      User.create({firstName: firstName, lastName: lastName, email: email, password: hash}, (err, user) => {
        if (err) return next(err);
        console.log("user created")
        return next(); 
      })
    })
  })
  // This is the new mongoDB string and password;
  // mongodb+srv://rexosariemen:654321abcdef@cluster0-hjjmn.mongodb.net/test?retryWrites=true&w=majority
  // {654321abcdef}
  //the next middleware will handle the creation of the cookies
  //after that, another middleware will create the entry for that user in the templates collection
}

userController.createTemplate = (req, res, next) => {
  // console.log(res.locals.userId);
  // const {userId} = res.locals;
  // Template.create({userId: userId, arrayOfTemplates: []});
  next();
}

userController.login = (req, res, next) => {
  // if (req.session) return next(); // We will review whether we need this session;
  const {password, email} = req.body;
  User.find({email: email}, {_id: 0, password: 1}, (err, hashDoc) => {
    if (err) {
      return next(err);
    } else if (hashDoc.length === 0) {
      // const errObj = {
      //   error: 'No such user exist in database',
      // };
      res.locals.message = 'No such user exists in the database.';
      console.log('non-existent user!');
      return next();
    };

    bcrypt.compare(password, hashDoc[0].password, (err, result) => {
      // if (!result) console.log("This password or/and email combination do not exist in our database.");
      // if (err) return next(err);
      if (result == true) {
        res.locals.message = 'User is logged in.';
        return next();
      }
    });
  });
}

userController.getTemplates = (req,res,next) => {
  //assuming the user id has been stored on the cookie
  const userCookieId = req.cookie;
  Template.find({userId: userCookieId} ,'arrayOfTemplates', (err, doc) => {
  console.log(doc);
  next();
  }
)}

  //assuming the Id is stored on the cookie
  // const userCookieId = req.cookie;
  // Template.find({userId: userCookieId} ,'arrayOfTemplates', (err, doc) => {
  // console.log(doc);
  // next();
  // }
// )}

userController.getUsers = (req,res, next) => {
  User.find({}, function (err, doc) {
    // console.log(doc);
    return next();
  });
}



// a mongoose middleware for a doc in the templates table when the user signs up

module.exports = userController;