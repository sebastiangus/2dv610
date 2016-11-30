'use strict';
var factory = require('.././model/SpreadsheetFactory');
var spread = factory.spreadsheet();
var row = factory.row();


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
    var result;
    if(input.getTemplateId !== undefined){
        result = input.getTemplateId();
    } else {
        result = false;
    }

    return result;
};

module.exports = new DomController();