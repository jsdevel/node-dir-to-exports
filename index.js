'use strict';

var path = require('path');
var basename = path.basename;
var dirname = path.dirname;
var resolve = path.resolve;
var extname = path.extname;
var relative = path.relative;
var glob = require('glob');
var extnames = ['.js'];

module.exports = function dirToExports(pattern, options){
  options = options || {};
  var parent = module.parent;
  var exports = parent.exports;
  var parentId = module.parent.id;
  var parentName = basename(parentId, '.js');
  var cwd = dirname(parentId);
  var _extnames = options.extnames || extnames;

  glob
    .sync(pattern, {cwd: cwd})
    .forEach(function(module){
      var ext = extname(module);

      if(extnames.indexOf(ext) === -1)return;

      var name = basename(module, '.js');
      var absolutePath;
      var resolved;
      var basePath;

      if(name === parentName)return;

      absolutePath = resolve(cwd, module);

      resolved = require.resolve(absolutePath);

      if(basename(resolved, '.js') === 'index')name = basename(dirname(resolved));

      exports[name] = require(resolved);
    });
};
