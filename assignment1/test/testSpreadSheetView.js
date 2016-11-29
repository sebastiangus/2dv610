'use strict';
var chai =require('chai');
var SpreadSheet = require('.././model/Spreadsheet');
var SpreadSheetView = require('.././view/SpreadSheetView');
var Row = require('../model/Row');
var sinon = require('sinon');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var spread = new SpreadSheet();
var row = new Row();

//How to check for thrown errors
//http://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha

describe('SpreadSheetView Tests',function () {
    beforeEach(function () {
        spread = new SpreadSheet();
    });

    it('SpreadSheetView should throw error if not initiated with SpreadSheet', function () {
       assert.Throw(SpreadSheetView, Error);
   });

    it('should throw error if initiated with object not constructed from SpreadSheet constructor',function () {
      expect(function () {
          var view = new SpreadSheetView(row);
      }).to.throw(Error);
    });

    it('should not throw error if initiated with SpreadSheet', function () {
        expect(function () {
            var view = new SpreadSheetView(spread);
        }).to.not.throw(Error);
    });

    it('should have property addListenersToSubject', function () {
        var view = new SpreadSheetView(spread);
        view.should.have.property('addListenersToSubject');
    });

    it('should add listener to SpreadSheet at instantiation', function () {
        spread.addListener = sinon.spy();
        var view = new SpreadSheetView(spread);
        assert(spread.addListener.called);
    });


});