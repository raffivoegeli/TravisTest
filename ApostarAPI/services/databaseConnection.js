var mysql = require('mysql');

var connection = mysql.createConnection({
    //host: '172.17.0.7',
    // port: '3306',
     host: 'sinv-56051.edu.hsr.ch',
     port: '40000',
    user: 'apostar',
    password: 'DerBlumeImsKaffi',
    database: 'apostar'
});

connection.connect(function(error) {
    if(error) {
        console.error(error);
    }
});

module.exports = connection;