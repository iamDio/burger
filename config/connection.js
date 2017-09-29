const mysql = require('mysql');
const connection = mysql.createConnection ({
	host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
	user: "k19ijwqsdqkl5fmw",
	password: "ajlukbx8mpdgmhnp",
	database: "burgers_db"
});

connection.connect((err)=> {
	if (err) throw err;
	console.log("Connected");
});

module.exports = connection;