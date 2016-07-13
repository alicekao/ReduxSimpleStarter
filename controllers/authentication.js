const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  // Want to encode info that doesn't change, sub is subject
  // iat = issued at time
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
  // User has already had email/pw auth'd, need to give token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(422).send({ error: 'You must provide an email and password' });
  }

  User.findOne({ email: email })
    .then(function (foundUser) {
      // If a user exists, return an error
      if (foundUser) {
        console.log(foundUser);
        // 422 means data was bad and couldn't process
        return res.status(422).send({ error: 'Email is in use' });
      }
      // If user does NOT exist, create & save user record
      const user = new User({
        email: email,
        password: password
      });

      user.save()
        .then(function (user) {
          // Respond to request w/ success
          res.json({ token: tokenForUser(user) });
        })
        .catch(function (err) {
          return next(err);
        })
    })
    .catch(function (err) {
      console.log('Error: ', err);
      return next(err);
    })


}