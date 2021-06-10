const config = require('./config')
const mysql = require('mysql')

// const db = mysql.createPool(config.db);
const db = mysql.createConnection(config.db)

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports=db