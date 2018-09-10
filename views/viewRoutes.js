const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


router.get('/', (req, res) => {
    burger.getBurgers()
        .then(data => {
            res.render('main', { burgers: data });
        });
});

module.exports = router;