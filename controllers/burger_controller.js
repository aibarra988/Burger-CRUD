const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/api/burgers', (req, res) => {
    burger.getBurgers()
        .then(res.json);
});

router.post('/api/burgers', (req, res) => {

});

router.put('/api/burgers', (req, res) => {

});

module.exports = router;