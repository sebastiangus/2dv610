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

Cell.prototype.getTemplateId = function () {
    return 'cell-template'
};

Cell.prototype.addListener = function () {

};

module.exports = Cell;