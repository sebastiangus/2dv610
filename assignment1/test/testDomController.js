'use strict';
var chai =require('chai');
var SpreadSheet = require('.././model/Spreadsheet');
var SpreadSheetView = require('.././view/SpreadSheetView');
var Row = require('../model/Row');
var sinon = require('sinon');
var domController = require('.././controller/DomController');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var spread = new SpreadSheet();
var row = new Row();

describe('DomController',function () {
   it('should return correct template for constructor',function () {
       expect(domController.getTemplateIdForObject(spread)).to.equal('spreadsheet-template');
   })
});