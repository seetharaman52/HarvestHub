var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'myPASSWORD123#A',
    database:'myapp',
});

var server = app.listen(4548, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`Server listening at port ${port}`);
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Successfully connected to Database!");
    }
})

app.get('/users', function(req, res){
    connection.query('SELECT * FROM info', function(error, results, fields){
        if(error){
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(results);
            res.send(results);
        }
    });
});

// Check if a phone number exists in DB
app.get('/checkPhoneNumber/:phoneNumber', function(req, res){
    const phoneNumber = req.params.phoneNumber;
    connection.query('SELECT * FROM info WHERE phn_number = ?', [phoneNumber], function(error, results, fields){
        if(error){
            console.log(error);
            res.status(500).json({ exists: false, error: 'Internal Server Error' });
        } else {
            const exists = results.length > 0;
            res.json({ exists: exists });
            //res.send(exists)
        }
    });
});

// Check if email exists in DB
app.get('/email/:email', function(req, res){
    const email = req.params.email;
    connection.query('SELECT * FROM info WHERE email = ?', [email], function(error, results, fields){
        if(error){
            console.log(error);
            res.status(500).json({ exists: false, error: 'Internal Server Error' });
        } else {
            const exists = results.length > 0;
            res.json({ exists: exists });
        }
    });
});

// Check if username exists in DB
app.get('/username/:username', function(req, res){
    const username = req.params.username;
    connection.query('SELECT * FROM info WHERE username = ?', [username], function(error, results, fields){
        if(error){
            console.log(error);
            res.status(500).json({ exists: false, error: 'Internal Server Error' });
        } else {
            const exists = results.length > 0;
            res.json({ exists: exists });
        }
    });
});

// Check if the phone number matches with its password
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

app.use(require('./signupProcess.js'));