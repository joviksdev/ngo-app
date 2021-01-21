const express = require('express');
const router = express.Router();
const events = require('../assets/data/events');
const gallery = require('../assets/data/gallery');

// Index Pages
router.get('/', (req, res) => {
  res.render('index', { title: 'Home', events: events, gallery: gallery });
});

// Contact Pages
router.get('/contact-us', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// About
router.get('/about-us', (req, res) => res.render('about', { title: 'About' }));

module.exports = router;
