'use strict';
var chai =require('chai');
var SpreadSheetView = require('.././view/SpreadSheetView');
var factory = require('.././model/SpreadsheetFactory');
var SpreadSheet = require('../model/SpreadSheet');
var Row = require('../model/Row');
var sinon = require('sinon');
var domController = require('.././controller/DomController');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('DomController',function () {
   it('should return spreadsheet-template string for object constructed by SpreadSheet constructor',function () {
       expect(domController.getTemplateIdForObject(factory.spreadsheet())).to.equal('spreadsheet-template');
   });

    it('should return row-template string for object constructed by SpreadSheet constructor',function () {
        expect(domController.getTemplateIdForObject(factory.row())).to.equal('row-template');
    });

    it('should return row-template string for object constructed by SpreadSheet constructor',function () {
        expect(domController.getTemplateIdForObject(ce)).to.equal('cell-template');
    });
});