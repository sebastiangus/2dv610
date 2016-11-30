'use strict';
var chai = require('chai');
var sinon = require('sinon');
var SpreadsheetFactory = require('../model/SpreadsheetFactory'); // Require the System to test
var Spreadsheet = require('../model/SpreadSheet'); // Require the System to test
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
        sut.rows.should.have.length(1);
    });

    it('rows attribute should have length 10 after addRow', function () {
        sut.addRow(9);
        sut.rows.should.have.length(10);
    });

    it('getRows array contains Row objects', function (){
        sut.addRow();
        let array = sut.getRows();
        array[0].should.be.instanceOf(Row);
    });

    it('addListener property should exist', function () {
        expect(sut).to.have.property('addListener');
    });

    it('addListener should push listener to listeners array', function () {
        var listener = sinon.spy();
        sut.addListener(listener);

        expect(sut).to.have.property('listeners');
        sut.listeners.should.have.length(1);
    });

    it('should invoke 1 registered listener', function () {
        var testListener = sinon.spy();
        sut.addListener(testListener);
        sut.notifyListeners();
        assert(testListener.calledOnce);
    });

    it('should invoke 5 registered listeners', function () {
        var testListener = sinon.spy();
        sut.addListener(testListener); //1
        sut.addListener(testListener); //2
        sut.addListener(testListener); //3
        sut.addListener(testListener); //4
        sut.addListener(testListener); //5
        sut.notifyListeners();
        assert(testListener.callCount == 5)
    });

    it('should invoke notifyListeners once when addRow executes', function () {
        sut.should.have.property('notifyListeners');
        sut.notifyListeners = sinon.spy();
        sut.addRow();
        assert(sut.notifyListeners.calledOnce);
    });
});