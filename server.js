var fs = require('fs');
var path = require('path');
var week= require('./service/week.js');
var month = require('./service/month.js')
var express = require('express');
var bodyParser = require('body-parser')
var foo = express();
var mysql = require('mysql');
foo.use(bodyParser())
foo.use(bodyParser.urlencoded({ extended: true }));

//fs.readFile('service/week.js');

foo.put("/db", function(req, res) {
 month.put(req, function (status, response) {
    res.status(status).send(response);
  })
});

foo.post("/db", function(req, res) {
 month.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

foo.del("/db", function(req, res) {
 month.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

foo.get("/db", function(req, res) {
 month.get(req, function (status, response) {
    res.status(status).send(response);
  })
});



//api path for put method
foo.put("/db", function(req, res) {
 week.put(req, function (status, response) {
    res.status(status).send(response);

  })
});

//api path for post method
foo.post("/db", function(req, res) {
 week.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for delete method
foo.del("/db", function(req, res) {
 week.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for get method
foo.get("/db", function(req, res) {
 week.get(req, function (status, response) {
    res.status(status).send(response);
  })
});

//assignment of port number
foo.listen(3002,function(){
 console.log("listening to 3002");
});
