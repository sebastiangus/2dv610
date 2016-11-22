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

    it('spreadSheet function should return object constructed from Spreadsheet constructor', function () {
        let sut = factory.spreadsheet();
        sut.constructor.should.equal(new Spreadsheet().constructor);
    });

    it('cell function should return object constructed from Spreadsheet constructor', function () {
        let sut = factory.cell();
        sut.constructor.should.equal(new Cell().constructor);
    });
});