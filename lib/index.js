'use strict';

var sqlite3 = require('sqlite3').verbose()
  ;

exports.exec = function (callback) {
  var db = new sqlite3.Database('data/test.db')
    ;
  db.each('select id, name from master', function (error, row) {
    console.log(row.id);
    console.log(row.name);
  });
  db.close();
  callback();
}
