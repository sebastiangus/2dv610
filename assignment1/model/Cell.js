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

};

module.exports = Cell;