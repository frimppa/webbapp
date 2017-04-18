var path = require('path');
var fs = require('fs');
//var http = require('http');
var module = require('./app2');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser());
app.use('/css', express.static('css'));
app.use('/css/pictures', express.static('pictures'));
app.set('view engine', 'ejs');
/*
app.get('/', function (req, res) {

    fs.readFile(path.join(__dirname + '/index.html'), function (err, data) {
        if (err) {
            res.write('eipä löydy');
        } else {
            module.moi();
            res.write(data);
        }

    });

});
*/
app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});
app.post('/sivu2', function (req, res) {

    res.render('sivu2', {enimi: req.body.etunimi, snimi: req.body.sukunimi});
});

app.listen(3000);


