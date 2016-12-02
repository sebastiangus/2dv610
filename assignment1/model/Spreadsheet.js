'use strict';

var Row = require('../model/Row');

function SpreadSheet(nRows, nCols) {
    var _nRows = typeof nRows === 'number' ? nRows : 1;
    var _nCols = typeof nCols === 'number' ? nCols : 1;
    this.rows = [];
    this.listeners = [];
    this.addRow(_nRows, _nCols);
}


SpreadSheet.prototype.getRows = function () {
    return this.rows;
};


SpreadSheet.prototype.addRow = function (nRows, nCols) {
    for(let i = 0; i < nRows; i += 1) {
        this.rows.push(new Row(nCols, this.notifyListeners));
    }

    this.notifyListeners();
};

SpreadSheet.prototype.addListener = function (listener) {
    this.listeners.push(listener);
};

SpreadSheet.prototype.notifyListeners = function () {
    if(this.listeners.length > 0) {
        this.listeners.forEach(function (element) {
            element();
        });
    }
};

SpreadSheet.prototype.getTemplateId = function () {
    return 'spreadsheet-template'
};

module.exports = SpreadSheet;