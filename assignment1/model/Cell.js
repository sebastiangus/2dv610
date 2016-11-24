'use strict';

function Cell() {
    this.value = null;
}

Cell.prototype.setValue = function (value) {
    this.value = value;
};

Cell.prototype.getValue = function () {
    return this.value;
};

module.exports = Cell;