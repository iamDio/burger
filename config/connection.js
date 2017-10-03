const mysql = require('mysql');
 const connection = mysql.createConnection ({
 	host: "y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
 	user: "hv61i7kvtr75zsqu",
 	password: "v7ngamadhupspjwo",
 	database: "uqserfsy9wimq8f8"
 });
 
 connection.connect((err)=> {
 	if (err) throw err;
 	console.log("Connected");
 });
 
 module.exports = connection; 