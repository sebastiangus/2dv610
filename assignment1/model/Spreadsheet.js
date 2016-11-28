'use strict';

var Row = require('../model/Row');
var DomController = require('../controller/DomController');

function Spreadsheet() {
    this.rows = [];
}


Spreadsheet.prototype.getRows = function () {
    return this.rows;
};


Spreadsheet.prototype.addRow = function () {
    this.rows.push(new Row());
};

Spreadsheet.prototype.appendDefaultTemplateToSelector = function(selector){
    var _selector = selector || 'body';
    var node = DomController.getTemplateNodeById('#spreadsheet-template');
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(node);
};

module.exports = Spreadsheet;