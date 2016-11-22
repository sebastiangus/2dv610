/**
 * Created by sebastiangustavsson on 2016-11-22.
 */
var Spreadsheet = require('../model/Spreadsheet');

function SpreadsheetFactory(){
}

SpreadsheetFactory.prototype.spreadsheet = function () {
    return new Spreadsheet();
};

module.exports = SpreadsheetFactory;
