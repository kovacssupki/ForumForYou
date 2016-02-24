// if our user.js file is at app/models/users.js
var User = require('../models/users');
  
// create a new user called chris
var newUser = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});



// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});