'use strict';
var chai = require('chai');
var SpreadsheetFactory = require('../model/SpreadsheetFactory'); // Require the System to test
var Spreadsheet = require('../model/Spreadsheet'); // Require the System to test
var Cell = require('../model/Cell');
var Row = require('../model/Row');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('SpreadsheetFactory', function(){
    var factory = new SpreadsheetFactory();
    var sut;

    it('should return a new Spreadsheet', function () {
        sut = factory.spreadsheet();
        sut.constructor.should.equal(new Spreadsheet().constructor);
    });

    it("should return a new Row", function() {
        sut = factory.row();
        sut.constructor.should.equal(new Row().constructor);
    });

    it('should return a new Cell', function () {
        sut = factory.cell();
        sut.constructor.should.equal(new Cell().constructor);
    });
});