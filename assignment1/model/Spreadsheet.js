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
    var importedHtml = DomController.getImportedTemplates();
    var templates = importedHtml.querySelector('#spreadsheet-template').content;
    var node = document.importNode(templates, true);
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(templates);
};

module.exports = Spreadsheet;