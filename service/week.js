// var mysql = require('mysql');
// var config = require('../config.json');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: config.sec.user,
//   password: config.sec.password,
//   database: "db"});
const model= require('./models').model
//var config = require('myapp/config.json');
//con.connect();
//function for put method
function put (req, callback){
  var sql = "UPDATE week SET agenda =('"+req.body.agenda+ "') WHERE user_id=('"+req.body.user_id+"') ";
   con.query(sql, function (err, result) {
     var response = {}
     if(err){
      response.msg = "error"
      callback(400, response)
      }else{
       console.log(result);
       response.msg = ("no of item updated:"+result.affectedRows)
       callback(200, response)
      }
  });
  }

//function for post method
  function post  (req, callback) {
    con.query('INSERT INTO week (user_id, date,agenda,start_time,end_time,mode,status)   values (("'+req.body.user_id+'"),("'+req.body.date+'"),("'+req.body.agenda+'"),("'+req.body.start_time+'"),("'+req.body.end_time+'"),("'+req.body.mode+'"),("'+req.body.status+'"))', function (err, result) {
  var res={}
      if(err){
        res.msg = "error"
          callback(400,res)
          }else{
          console.log("one item added");
          res.msg = ("no of item added:"+result.affectedRows)
          callback(200,res)
        }
      });
  };

//function for delete method
function del(req,callback){
  var sql =  "DELETE from week WHERE agenda = ('"+req.body.agenda+"')";
  con.query(sql, function (err, res) {
    var res={}
    if(err){
      res.msg = "error"
        callback(400,res)
        }else{
        console.log("one item deleted");
        res.msg = ("no of item deleted:"+result.affectedRows)
        callback(200,res)
      }
  });
};

//function for get method
function get(req,callback){
    con.query("SELECT * from week", function(err,result){
  var response={}
  if(err){
    response.msg = "error"
    callback(400,response)
  }else{
    var json ={}
    var status = {}
    past = []
    present = []
    future = []
  for (r in result){
      if(result[r].status == 'true'){
        ch = {}
        ch.user_id  = result[r].user_id;
        ch.date     = result[r].date;
        ch.agenda   = result[r].agenda;
        ch.start_time = result[r].start_time;
        ch.end_time = result[r].end_time;
        ch.mode     = result[r].mode;
        ch.status   = result[r].status;
        past.push(ch);
        console.log(ch)
      }

      if(result[r].status == 'null'){
        ch = {}
        ch.user_id  = result[r].user_id;
        ch.date     = result[r].date;
        ch.agenda   = result[r].agenda;
        ch.start_time = result[r].start_time;
        ch.end_time = result[r].end_time;
        ch.mode     = result[r].mode;
        ch.status   = result[r].status;
        present.push(ch)
        console.log(ch)
      }

      if(result[r].status == 'false'){
        ch = {}
        ch.user_id  = result[r].user_id;
        ch.date     = result[r].date;
        ch.agenda   = result[r].agenda;
        ch.start_time = result[r].start_time;
        ch.end_time = result[r].end_time;
        ch.mode     = result[r].mode;
        ch.status   = result[r].status;
        future.push(ch)
        console.log(ch)
      }
    }
    json.week ={}
    json.week.past = past;
    json.week.present = present;
    json.week.future = future;
    console.log(json);
    response.msg=(json)
    callback(200,response)
};
});
}

//exporting the function
module.exports = {
  put:put,
  post:post,
  del:del,
  get:get
}
