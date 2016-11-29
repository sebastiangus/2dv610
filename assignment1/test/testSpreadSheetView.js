/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai =require('chai');
var spreadFactory = require('.././model/SpreadsheetFactory');
var SpreadSheetView = require('.././view/SpreadSheetView');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

//How to check for thrown errors
//http://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha

describe('view Tests',function () {
    it('view should throw error if not initiated with SpreadSheet', function () {
       assert.Throw(SpreadSheetView, Error);
   });

    it('view should not throw error if initiated with SpreadSheet', function () {
       expect(SpreadSheetView).to.not.throw(Error);
    })
});