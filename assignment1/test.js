'use strict';

//https://github.com/chaijs/chai
var chai = require('./node_modules/chai/chai.js');

require('chai/register-assert');  // Using Assert style
require('chai/register-expect');  // Using Expect style
require('chai/register-should');  // Using Should style

describe('Test returnInput', function(){
    it('should return same input', function () {
        returnInput("hi").should.equal("hi");
    });
});
