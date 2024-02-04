var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

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
    }else{
        console.log("Connected to password checking DB");
    }
})

app.get('/checkPassword/:phoneNumber/:password', function(req, res){
    const phoneNumber = req.params.phoneNumber;
    const password = req.params.password;
    connection.query('SELECT * FROM info WHERE phn_number = ? AND password = ?', [phoneNumber, password], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(500).json({ exists: false, error: 'Internal Server Error' });
        } else {
            const exists = results.length > 0;
            res.setHeader('Content-Type', 'application/json');
            res.json({ exists: exists });
        }
    });
});

module.exports = app;