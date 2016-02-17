var mongoose = require('mongoose');

exports = module.exports = ( ) => {

    //create Schema
    var userSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
      username: {type:String, required: true, unique: true},
      email: {type:String, required: true, unique: true},
      description: String,
      quote: String,
      quoteAuthor: String,
      quoteSource: String,
      photo: String,
      messages: [{
        date:{type:Date},
        from:{type:String},
        body:{type:String}
      }]
    });

    //methods


    //create model using Schema
    var User = mongoose.model('User',userSchema);

    //create instance of model
    var person = new User({
      firstName:'Johnvkujblhbk',
      lastName:'Doe',
      username:'johndoe',
      email:'johndoe@yahoo.com',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupatat non pront, sunt in culpa qui officia deserunt mollit anim  est laborum.',
      quote:'We are all apprentices in a craft where no one ever becomes a master.',
      quoteAuthor:'Ernest Hemingway',
      quoteSource:'The Wild Years',
      photo:'assets/images/stefan.jpg',
      messages:[{
        date: 2016/12/23,
        from: 'person1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed onsectetur adipisicing onsectetur adipisicing do eiusmod tempor incunt ut labore'
        },
        {
        date: 2014/09/03,
        from: 'person3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        }
      ]
    });

    //save instance in database
    // person.save(function(err){
    //   if(err){
    //     return console.error(err);
    //   }
    // });

    // update instance in database
    User.
    update(
       { "id" : "stefan" },
       {$set: { "firstName": "Stefan" },}).
    exec(function (err, person) {
     if (err) {
       return handleError(err);
     }
     console.log(person);
     // console.log('%s %s\'s email is %s.', person.firstName, person.lastName, person.email)
    });


    //find user with a id matching 'stefan', selecting the `firstName` and `email` fields
    // User.
    // findOne({'id':'stefan'}).
    // // select({ firstName: 1, lastName: 1, email: 1 }).
    // exec(function (err, person) {
    //   if (err) {
    //     return handleError(err);
    //   }
    //   console.log(person);
    //   // console.log('%s %s\'s email is %s.', person.firstName, person.lastName, person.email)
    // });
};

exports[ '@singleton' ] = true;
exports['@require'] = [
  'middleware/dbconnect'
];
