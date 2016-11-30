'use strict';
var chai =require('chai');
var SpreadSheet = require('../model/SpreadSheet');
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
   it('should return spreadsheet-template string for object constructed by SpreadSheet constructor',function () {
       expect(domController.getTemplateIdForObject(spread)).to.equal('spreadsheet-template');
   });

    it('should return row-template string for object constructed by SpreadSheet constructor',function () {
        expect(domController.getTemplateIdForObject(row)).to.equal('row-template');
    });
});