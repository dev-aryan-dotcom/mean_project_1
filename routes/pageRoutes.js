const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => {
    res.render('pages/index');
});

// About
router.get('/about', (req, res) => {
    res.render('pages/about');
});

// Contact
router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

module.exports = router;