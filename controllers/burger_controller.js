const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/api/burgers', (req, res) => {
    burger.getBurgers()
        .then(data => {
            res.json(data);
        });
});

router.post('/api/burgers', (req, res) => {
    const { name } = req.body; 
    console.log(req.body);
    burger.addBurger(name)
        .then(data => {
            res.end(200, `${name} was added to burgers`);
        })
        .catch(err => {
            res.end(500, `Something went wrong with adding your burger`).end();
        });
});
    
router.put('/api/burgers', (req, res) => {
    const { id } = req.body;
    
    burger.devourBurger(id, true)
        .then(data => {
            console.log(data);
            if (data.affectedRows >= 1) {
                res.send(200, `Burger ${id} was devoured`).end();
            } else {
                res.send(404, `Burger ${id} was not found`).end();
            }
        })
        .catch(err => {
            res.status(500).send("Something went wrong with updating your burger [" + err + "]");
        });
});

module.exports = router;