const connection = require('./connection');

const orm = {
    selectAll() {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM burgers`;
            connection.query(queryString, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    },
    insertOne(burgerName) {
        return new Promise((resolve, reject) => {
            const queryString = `
                INSERT INTO burgers (name, devoured) VALUES (?, false)
            `;
            connection.query(queryString, [burgerName], (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data);
            });
        });
    },
    updateOne(id, devoured) {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";

            console.log(id, devoured);

            connection.query(queryString, [devoured, id], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
};

module.exports = orm;