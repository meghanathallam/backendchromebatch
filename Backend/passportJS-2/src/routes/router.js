const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');

// GET Routes
router.get('/', (req, res) => {
  res.render('index.ejs', { title: 'Home' });
});

router.get('/login', (req, res) => {
  res.render('login.ejs', { title: 'Login' });
});


router.get('/logout', (req, res, next) => {
  
  req.logout( (err) => {
    if(err) return next(err);
  });
  res.redirect('/');
});

// POST Routes
router.post(
  '/login',
  // (req, res) => {
  //   console.log(req.body);
  // },
  passport.authenticate('local',
   {
    failureRedirect: '/login',
    successRedirect: '/secret',
  }
  )
  
);
router.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.render('secret.ejs', { title: 'Secret Page' })
);


module.exports = router;
