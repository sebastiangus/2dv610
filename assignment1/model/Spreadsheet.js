'use strict';

var Row = require('../model/Row');
var DomController = require('../controller/DomController');

function Spreadsheet(nRows, nCols) {
    var _nRows = typeof nRows === 'number' ? nRows : 1;
    var _nCols = typeof nCols === 'number' ? nCols : 1;
    this.rows = [];
    this.listeners = [];
    this.addRow(_nRows, _nCols);
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};


Spreadsheet.prototype.addRow = function (nRows, nCols) {
    for(let i = 0; i < nRows; i += 1) {
        this.rows.push(new Row(nCols));
    }

    this.notifyListeners();
};

Spreadsheet.prototype.appendDefaultTemplateToSelector = function(selector){
    var _selector = selector || 'body';
    var node = DomController.getTemplateNodeById('#spreadsheet-template');
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(node);
};

Spreadsheet.prototype.addListener = function (listener) {
    this.listeners.push(listener);
};

Spreadsheet.prototype.notifyListeners = function () {
    if(this.listeners.length > 0) {
        this.listeners[0]();
    }
};

module.exports = Spreadsheet;