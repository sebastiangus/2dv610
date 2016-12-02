'use strict';
var Cell = require('../model/Cell');

function Row(nCells, listener) {
    var _nCells = typeof nCells === 'number' ? nCells : 1;

    this.cells = [];

    this.addCell(_nCells, listener);
}

Row.prototype.addCell = function (nCells, listener) {
    var _nCells = nCells || 1;

    for(let i = 0; i < _nCells; i += 1){
        var cell = new Cell();
        cell.addListener(listener);
        this.cells.push(new Cell());
    }
};

Row.prototype.getTemplateId = function () {
    return 'row-template';
};


module.exports = Row;
