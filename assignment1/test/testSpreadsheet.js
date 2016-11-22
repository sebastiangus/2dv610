'use strict';
var chai = require('chai');
var SpreadsheetFactory = require('../model/SpreadsheetFactory'); // Require the System to test
var Spreadsheet = require('../model/Spreadsheet'); // Require the System to test
var Cell = require('../model/Cell');
var Row = require('../model/Row');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Spreadsheet', function(){
    var sut = new Spreadsheet();

    it('should return empty rows Array', function () {
        sut.getRows.should.be.a('function');
    });

});