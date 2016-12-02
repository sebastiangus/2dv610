'use strict';

function Cell() {
    this.value = null;
    this.listeners = [];
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

Cell.prototype.addListener = function (listener) {
    this.listeners.push(listener);
};

module.exports = Cell;