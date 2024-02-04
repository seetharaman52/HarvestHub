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
        console.log("Connected");
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

app.use(require('./validatePhoneNo.js'));
app.use(require('./signUpProcess.js'));
app.use(require('./checkPhnNo.js'));