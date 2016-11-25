'use strict';

var sqlite3 = require('sqlite3').verbose()
  ;

exports.exec = function (callback) {
  var db = new sqlite3.Database('data/test.db')
    , names = []
    ;

  names.push('JavaScript');
  names.push('Java');
  names.push('Go');
  names.push('Scala');
  names.push('Ruby');
  names.push('Python');
  names.push('Perl');
  names.push('PHP');

  db.serialize(function () {
    db.run('drop table if exists master');
    db.run('create table master (id integer primary key autoincrement, name text)');
    var stmt = db.prepare('insert into master (name) values (?)');

    names.forEach(function (name) {
      stmt.run(name);
    });
    stmt.finalize();
    db.each('select id, name from master', function (error, row) {
      console.log(row.id);
      console.log(row.name);
    });
  });
  db.close();
  callback();
}
