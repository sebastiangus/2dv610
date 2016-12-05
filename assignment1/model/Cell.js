'use strict';

function Cell() {
    this.value = null;
    this.listeners = [];
}

Cell.prototype.setValue = function (value) {
    this.value = value;
    this.notifyListeners();
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

Cell.prototype.notifyListeners = function () {
    if(this.listeners.length > 0) {
        this.listeners.forEach(function (element) {
            element();
        });
    }
};

module.exports = Cell;