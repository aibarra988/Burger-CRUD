const orm = require('../config/orm');

const burger = {
    getBurgers() {
        return orm.selectAll();
    },
    addBurger(burgerName) {
        return orm.insertOne(burgerName);
    },
    devourBurger(id, devoured) {
        return orm.updateOne(id, devoured);
    }
};

module.exports = burger;