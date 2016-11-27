'use strict';

var Row = require('../model/Row');

function Spreadsheet() {
    this.rows = [];
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};


Spreadsheet.prototype.addRow = function () {
    this.rows.push(new Row());
};





module.exports = Spreadsheet;