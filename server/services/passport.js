const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
// Tell where to find username, but we need to tell it to use email prop
const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  // Verify username/pw
  User.findOne({ email: email })
    .then(function (user) {
      if (!user) { return done(null, false); }
      // If found, compare passwords
      user.comparePassword(password, function (err, isMatch) {
        if (err) { return done(err); }
        if (!isMatch) { return done(null, false); }

        // Call passport callback if user is found, assigns user as req.user
        return done(null, user);
      })
    })
    .catch(function (err) {
      done(err);
    })
});

// Set up options for JWT Strategy
// Tell passport where to look for jwt
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // Called everytime. Payload is decoded jwt token obj w/ sub and iat props 
  // See if user ID exists in db
  User.findById(payload.sub)
    .then(function (user) {
      if (user) {
        done(null, user);
      } else {
        // Didn't find a user
        done(null, false);
      }
    })
    .catch(function (err) {
      return done(err, false);
    })
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);