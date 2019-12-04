// user and usersettings - mapped to the object id of each user

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://ve33y:keith&Codesmith2019@canec-3hfof.mongodb.net/test?retryWrites=true&w=majority';


mongoose
.connect(MONGO_URI, {
// options for the connect method to parse the URI
useNewUrlParser: true,
useUnifiedTopology: true,
// sets the name of the db and our collections part of
dbName: 'canEC',
})
.then(() => console.log('Connected to DB.'))
.catch((err) => console.log(err))

const {Schema} = mongoose;
// sets a schema for the 'user' collection

const userSchema = new Schema ({
firstName: {type: String, required: true},
lastName: {type: String, required: true},
email: {type: String, required: true},
password: {type: String, required: true}
});

const User = mongoose.model('users', userSchema);

const userTemplateSchema = new Schema({
userId: {type: String, required: true},
arrayOfTemplates: {type: String}
});

const Template = mongoose.model('templates', userTemplateSchema);

module.exports = {
  User,
  Template
}