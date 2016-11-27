'use strict';

var Database = require('better-sqlite3')
  ;

exports.exec = function (callback) {
  var db = new Database('data/test.db')
    ;
  db.on('open', function () {
    var statement = db.prepare('select id, name from master');
    statement.each(function (row) {
      console.log(row.id);
      console.log(row.name);
    });
    db.close();
  });
  db.on('close', function () {
    callback();
  });
}
