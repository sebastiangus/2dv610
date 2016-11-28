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


Spreadsheet.prototype.appendToSelector = function(selector){
    var _selector = selector || 'body';
    var template = DomController.getTemplateNodeById('#spreadsheet-template');
    var node = document.importNode(template, true);
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(node);
};

module.exports = Spreadsheet;