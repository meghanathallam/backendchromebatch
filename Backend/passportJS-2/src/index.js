// Requiring Modules
const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const passport = require('passport');
const session = require('express-session');
const UserDetails = require('./userDetails');
const routes = require('./routes/router');
const LocalStrategy = require('passport-local').Strategy
require('dotenv').config();

// Set up view engine and layout
app.use(expressLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// Set up session
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.use(express.urlencoded({ extended: false }));

// Set up Passport
app.use(passport.initialize());
app.use(passport.session());


passport.use(UserDetails.createStrategy());
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

printData = (req, res, next) => {
    console.log("\n==============================")
    console.log(`req.body -----> ${JSON.stringify(req.body)}`)
    // console.log(`req.body.username -------> ${req.body.username}`)
    // console.log(`req.body.password -------> ${req.body.password}`)

    // console.log(`\n req.session.passport -------> `)
    // console.log(req.session.passport)

    // console.log(`\n req.user -------> `)
    // console.log(req.user)

    // console.log("\n Session and Cookie")
    // console.log(`req.session.id -------> ${req.session.id}`)
    // console.log(`req.session.cookie -------> `)
    // console.log(req.session.cookie)

    // console.log("===========================================\n")

    next()
}

app.use(printData)
app.use(routes);

// Set up Express server
if (!module.parent)
    app.listen(3000, () => {
        console.log(`Listening on port 3000`);
    });

// UserDetails.register({ username: 'Matt', active: false }, 'matt123');

module.exports = app