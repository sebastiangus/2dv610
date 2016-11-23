'use strict';
var Cell = require('../model/Cell');

function Row() {
    this.cells = [];
}

Row.prototype.addCell = function () {
    this.cells.push(new Cell());
};

module.exports = Row;
