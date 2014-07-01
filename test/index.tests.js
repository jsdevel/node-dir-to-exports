'use strict';

var should = require('should');

describe('dir-to-exports', function(){
  var sample = require('./fixtures/sample.js');

  it('should load subdirectories by default', function(){
    sample.zoo.should.equal('zoo');
    sample.coo.should.equal('coo');
    sample.foo.should.equal('foo');
    sample.submarines.should.equal('submarines');
    Object.keys(sample).length.should.equal(4);
  });
});
