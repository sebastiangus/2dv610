'use strict';

function Spreadsheet() {
    this.rows = [];
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};

Spreadsheet.prototype.addRow = function () {
    this.rows.push("asd");
};

module.exports = Spreadsheet;