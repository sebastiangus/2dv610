'use strict';

var Row = require('../model/Row');
var DomController = require('../controller/DomController');

function Spreadsheet(nRows) {
    console.log(typeof  nRows);
    var _nRows = typeof nRows === 'number' ? nRows : 1;
    console.log(_nRows);
    this.rows = [];

    this.addRow(_nRows);
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};


Spreadsheet.prototype.addRow = function (nRows) {
    for(let i = 0; i < nRows; i += 1) {
        this.rows.push(new Row());
    }
};

Spreadsheet.prototype.appendDefaultTemplateToSelector = function(selector){
    var _selector = selector || 'body';
    var node = DomController.getTemplateNodeById('#spreadsheet-template');
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(node);
};

module.exports = Spreadsheet;