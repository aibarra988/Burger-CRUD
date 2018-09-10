const mysql = require('mysql');
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.createConnection(JAWSDB_URL));
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: "root",
        password: "root",
        database: "burger_db"
    });
}

connection.connect((err) => { 
    if (err) {
        console.error('Error connecting to database', err);
        return;
    }
    console.log(`Connected to DB as id: ${connection.threadId}`)
});

module.exports = connection;