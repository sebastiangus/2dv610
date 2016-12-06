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

    it('should return object with property "valueType" containing "number"', function () {
        expect(sut.suggestSeriesFormulaFromInput(100, 200)).to.have.property('valueType');
    });


});