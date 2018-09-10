const orm = require('../config/orm');

const burger = {
    getBurgers() {
        return orm.selectAll();
    },
    addBurger(burgerName) {
        return orm.insertOne(burgerName);
    },
    delete(id) {
        return orm.delete(id);
    },
    devourBurger(id, devoured) {
        return orm.updateOne(id, devoured);
    }
};

module.exports = burger;