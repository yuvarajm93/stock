var mysql = require('mysql');
// var config = require('myapp/config.json');


// var mysql = require('mysql');

var con = mysql.createConnection({
  "modules.exports":{

    /**Declaration of databases for my development environment**/
      dev: {
          databases: {
              weekdatabase: {
                    host      : "localhost",
                    user      : "root",
                    password  : null,
                    database  : "db"
              },
              monthdatabase: {
                host      : "localhost",
                user      : "root",
                password  : null,
                database  : "db"
              },
          },
      }
  }
});
con.connect();
