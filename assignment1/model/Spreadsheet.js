'use strict';

function Spreadsheet() {
    this.rows = [];
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};

module.exports = Spreadsheet;