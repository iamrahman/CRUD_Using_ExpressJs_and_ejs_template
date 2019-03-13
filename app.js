var express = require('express');
var bodyParser= require('body-parser');
var User = require('./models/user');
var db = require('./db');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const alert = require('alert-node');
mongoose.Promise = global.Promise;

// Connecting to the database

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	User.find((err, docs) =>{
    if(!err)
      res.render('home', {'docs':docs});
    else
      console.log(JSON.stringify(err));
	});
});

app.get('/add-employee', function(req, res){
   res.render('addEmployee');
});

app.post('/add_employee_form_data',function(req,res){
  var userTable = new User(req.body);
  userTable.save(function(err,docs){
    alert('Eployee Data Added Successfully');
  });

  res.redirect('/');
});


app.get('/edit_employee/:id', function(req, res){
  User.findById(req.params.id,function (err, doc){
    if(!err)
      res.render('edit_employee', {'docs':doc});
    else
      console.log(JSON.stringify(err));
  });
});

app.get('/delete_employee/:id', function(req, res){
  User.findByIdAndRemove(req.params.id,function (err, doc){
    if(!err)
      res.redirect('/');
    else
      console.log(JSON.stringify(err));
  });
});

app.post('/save_employee_details/:id', function(req, res){
  User.update({'_id': req.params.id}, req.body, function(err, raw) {
    if(!err)
      res.redirect('/');
    else
      res.send(err);
  });
});

app.listen(3000);