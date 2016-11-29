'use strict';
var chai =require('chai');
var SpreadSheet = require('.././model/Spreadsheet');
var SpreadSheetView = require('.././view/SpreadSheetView');
var Row = require('../model/Row');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var spread = new SpreadSheet();
var row = new Row();

//How to check for thrown errors
//http://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha

describe('view Tests',function () {
    it('view should throw error if not initiated with SpreadSheet', function () {
       assert.Throw(SpreadSheetView, Error);
   });

    it('view should throw error if initiated with Row',function () {
      expect(function () {
          var view = new SpreadSheetView(row);
      }).to.throw(Error);
    });

    it('view should not throw error if initiated with SpreadSheet', function () {
        expect(function () {
            var view = new SpreadSheetView(spread);
        }).to.not.throw(Error);
    });
});