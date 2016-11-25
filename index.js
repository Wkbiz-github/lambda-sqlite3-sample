'use strict';

var db = require('lib/index')
  ;

exports.handler = function (event, context, callback) {
  db.exec(callback);
};
