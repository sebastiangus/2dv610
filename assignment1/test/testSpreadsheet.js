'use strict';
var chai = require('chai');
var sinon = require('sinon');
var SpreadsheetFactory = require('../model/SpreadsheetFactory'); // Require the System to test
var Spreadsheet = require('../model/Spreadsheet'); // Require the System to test
var Cell = require('../model/Cell');
var Row = require('../model/Row');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Spreadsheet', function(){
    var sut = new Spreadsheet();

    afterEach(function () {
        sut = new Spreadsheet();
    });

    it('Spreadsheet has getRows property', function () {
        expect(sut).to.have.property('getRows');
    });

    it('getRows method returns empty array', function () {
        expect(sut.getRows()).to.be.a('array')
    });

    it('should have property rows', function () {
        sut.should.have.property('rows');
    });

    it('rows attribute should have length one after addRow', function () {
        sut.addRow();
        sut.rows.should.have.length(1);
    });

    it('getRows array contains Row objects', function (){
        sut.addRow();
        let array = sut.getRows();
        array[0].should.be.instanceOf(Row);
    });
});