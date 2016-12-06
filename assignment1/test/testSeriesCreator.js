var SeriesCreator = require('../model/SeriesCreator');
var Cell = require('../model/Cell');

var chai = require('chai');
var sinon = require('sinon');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('SeriesCreator Test', function () {
    var sut = new SeriesCreator;

    it('should have property suggestSeriesFormulaFromInput', function () {
        expect(sut).to.have.property('suggestSeriesFormulaFromInput');
    });

    it('should return object with property "valueType"', function () {
        expect(sut.suggestSeriesFormulaFromInput()).to.have.property('valueType');
    });

    it('should return object with property "valueType" equal Number constructor', function () {
        expect(sut.suggestSeriesFormulaFromInput(100).valueType).to.equal(Number);
    });

    it('should return object with property "valueType" equal String constructor', function () {
        expect(sut.suggestSeriesFormulaFromInput("text", "text1", "text3").valueType).to.equal(String);
    });


});