'use strict';
var chai = require('chai');
var SpreadsheetFactory = require('../model/SpreadsheetFactory'); // Require the System to test
var Spreadsheet = require('../model/Spreadsheet'); // Require the System to test

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('factoryTest', function(){
    it('spreadSheet function should return object constructed from Spreadsheet constructor', function () {
        var factory = new SpreadsheetFactory();
        var sut = factory.spreadsheet();
        sut.constructor.should.equal(new Spreadsheet().constructor);
    });
});