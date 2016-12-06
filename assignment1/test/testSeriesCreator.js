var SeriesCreator = require('../model/SeriesCreator');

var chai = require('chai');
var sinon = require('sinon');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('SeriesCreator Test', function () {
    var sut = new SeriesCreator;

    it('should have property suggestSeriesFormulaFromInput', function () {
        expect(sut).to.have.property('suggestSeriesFormulaFromInput');
    })
});