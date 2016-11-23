'use strict';

function Row() {
    this.cells = [];
}

Row.prototype.addCell = function () {
    this.cells.push(1);
};

module.exports = Row;
