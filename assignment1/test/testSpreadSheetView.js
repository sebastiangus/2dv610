/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai =require('chai');
var spreadFactory = require('.././model/SpreadsheetFactory');
var SpreadSheetView = require('.././view/SpreadSheetView');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('view Tests',function () {
    it('view should throw error if not initiated with SpreadSheet', function () {
       should.Throw(new SpreadSheetView());
   });
});