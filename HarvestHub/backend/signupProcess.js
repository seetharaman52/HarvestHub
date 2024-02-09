var mysql = require('mysql');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'myPASSWORD123#A',
    database: 'myapp',
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }
})

var sqlQuery = `INSERT INTO info 
            (
                username, phn_number, email, password
            )
            VALUES
            (
                ?, ?, ?, ?
            )`;

app.post('/signup', function(req, res){
    const { username, phoneNumber, email, password } = req.body;
    if (!username || !phoneNumber || !email || !password) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }
    connection.query(sqlQuery, [username, phoneNumber, email, password], function(error, results, fields){
            if(error){
                console.log(error);
                res.status(500).json({ success: false, error: 'Internal Server Error' });
            } else {
                res.json({ success: true });
            }
        });
});

module.exports = app;