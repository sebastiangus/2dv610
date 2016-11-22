'use strict';
var chai = require('chai');
var SpreadsheetFactory = require('../model/SpreadsheetFactory'); // Require the System to test
var Spreadsheet = require('../model/Spreadsheet'); // Require the System to test
var Cell = require('../model/Cell');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('factoryTest', function(){
    var factory = new SpreadsheetFactory();
    var sut;

    it('should return a new Spreadsheet', function () {
        sut = factory.spreadsheet();
        sut.constructor.should.equal(new Spreadsheet().constructor);
    });

    it("should return a new Row", function() {
        sut = factory.row();
    });

    it('should return a new Cell', function () {
        sut = factory.cell();
        sut.constructor.should.equal(new Cell().constructor);
    });

});