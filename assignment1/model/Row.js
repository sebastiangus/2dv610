'use strict';
var Cell = require('../model/Cell');

function Row() {
    this.cells = [];
}

Row.prototype.addCell = function (number) {
    var number = number || 1;

    for(let i = 0; i < number; i++){
        this.cells.push(new Cell());
    }
};

module.exports = Row;
