'use strict';
var factory = require('.././model/SpreadsheetFactory');
var spread = factory.spreadsheet();
var row = factory.row();


function DomController() {
}


DomController.prototype.appendDefaultTemplateToSelector = function(obj, selector){
    var _selector = selector || 'body';
    var id = this.getTemplateIdForObject(obj);
    var node = this.getTemplateNodeById(id);
    var appendToElement = document.querySelector(_selector);
    appendToElement.appendChild(node);
};

DomController.prototype.getElementForObject = function (obj) {
    var id = this.getTemplateIdForObject(obj);
    var element = this.getTemplateNodeById(id);
    return element;
};


DomController.prototype.getImportedTemplates = function () {
    var templates = document.querySelector('link[rel=import]');
    var importedHtml = templates.import;
    return importedHtml;
};


DomController.prototype.getTemplateNodeById = function (selector) {
    var validatedSelector = this.getValidatedIdStringStartingWithHash(selector);
    var templates = this.getImportedTemplates();
    var selectedTemplate = templates.querySelector(validatedSelector).content;
    var node = document.importNode(selectedTemplate, true);
    return node;
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

DomController.prototype.getValidatedIdStringStartingWithHash = function (id) {
    if(id[0] !== "#"){
        id = "#" + id;
    }

    return id;
};

DomController.prototype.activateCellForInput = function (cell) {

};

module.exports = new DomController();