'use strict';

function Spreadsheet() {
    this.rows = [];
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};

Spreadsheet.prototype.addRow = function () {
    this.rows.push(1);
};

module.exports = Spreadsheet;