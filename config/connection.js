const mysql = require('mysql');
const connection = mysql.createConnection (process.env.JAWSDB_URL);

connection.connect((err)=> {
	if (err) throw err;
	console.log("Connected");
});

module.exports = connection;