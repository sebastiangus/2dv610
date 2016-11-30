'use strict';
var SpreadSheetFactory = require('.././model/SpreadsheetFactory');
var factory = new SpreadSheetFactory();
var spread = factory.spreadsheet();

function DomController() {
}

DomController.prototype.getImportedTemplates = function () {
    var templates = document.querySelector('link[rel=import]');
    var importedHtml = templates.import;
    return importedHtml;
};

DomController.prototype.getTemplateNodeById = function (selector) {
    var templates = this.getImportedTemplates();
    var selectedTemplate = templates.querySelector(selector).content;
    var node = document.importNode(selectedTemplate, true);
    return node;
};

DomController.prototype.appendDefaultTemplateToSelector = function(selector){
    var _selector = selector || 'body';
    var node = this.getTemplateNodeById('#spreadsheet-template');
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(node);
};


DomController.prototype.getTemplateIdForObject = function (input) {
    var id;
    switch(input.prototype) {
        case spread.prototype:
            id = 'spreadsheet-template';
            break;
        default:
            throw new Error('No template for object prototype');
            break;
    }

    return id;
};

module.exports = new DomController();