'use strict';
var Cell = require('../model/Cell');

function Row(nCells) {
    var _nCells = typeof nCells === 'number' ? nCells : 1;

    this.cells = [];

    this.addCell(_nCells);
}

Row.prototype.addCell = function (nCells) {
    var _nCells = nCells || 1;

    for(let i = 0; i < _nCells; i += 1){
        this.cells.push(new Cell());
    }
};

Row.prototype.getTemplateId = function () {
    return 'row-template';
};
module.exports = Row;
