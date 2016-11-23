'use strict';

function Spreadsheet() {
    this.rows = [];
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};

Spreadsheet.prototype.addRow = function () {

};

module.exports = Spreadsheet;