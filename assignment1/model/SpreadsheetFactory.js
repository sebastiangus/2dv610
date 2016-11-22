/**
 * Created by sebastiangustavsson on 2016-11-22.
 */
var Spreadsheet = require('../model/Spreadsheet');
var Cell = require('../model/Cell');

function SpreadsheetFactory(){
}

SpreadsheetFactory.prototype.spreadsheet = function () {
    return new Spreadsheet();
};

SpreadsheetFactory.prototype.cell = function () {
};

module.exports = SpreadsheetFactory;
