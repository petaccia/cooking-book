const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/currentUser', authController.getCurrentUser);
router.get('/logout', authController.logout);

// Routes de Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/auth/login/failed',
  successRedirect: process.env.FRONTEND_URL
}));

// Route de déconnexion
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.FRONTEND_URL);
});

// Route en cas d'échec d'authentification
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'Authentication rejetée',
  });
});

// Route en cas de succès d'authentification
router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'Authentication réussie',
      user: req.user,
    });
  }
});

module.exports = router;