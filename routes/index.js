const express = require('express');
const router = express.Router();

// desc     dashboard
// route    GET / 
router.get('/', (req, res) => {
    res.render('dashboard');
});

module.exports = router;