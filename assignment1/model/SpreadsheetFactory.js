'use strict';

var Spreadsheet = require('../model/Spreadsheet');
var Cell = require('../model/Cell');
var Row = require('../model/Row');

function SpreadsheetFactory(){
}

SpreadsheetFactory.prototype.spreadsheet = function () {
    return new Spreadsheet(10,10);
};

SpreadsheetFactory.prototype.row = function () {
    return new Row();
};

SpreadsheetFactory.prototype.cell = function () {
    return new Cell();
};

module.exports = SpreadsheetFactory;
