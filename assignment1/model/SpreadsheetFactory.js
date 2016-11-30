'use strict';

var SpreadSheet = require('../model/SpreadSheet');
var Cell = require('../model/Cell');
var Row = require('../model/Row');

function SpreadSheetFactory(){
}

SpreadSheetFactory.prototype.spreadsheet = function (nRows, nCols) {
    return new SpreadSheet(nRows, nCols);
};

SpreadSheetFactory.prototype.row = function () {
    return new Row();
};

SpreadSheetFactory.prototype.cell = function () {
    return new Cell();
};

module.exports = SpreadSheetFactory;
