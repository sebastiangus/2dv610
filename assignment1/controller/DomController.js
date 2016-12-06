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
    var documentFragment = document.createDocumentFragment();
    var inputElement = this.getTemplateNodeById('cell-input-template');
    documentFragment.appendChild(inputElement);

    documentFragment.querySelector('.cell-input').value = cell.getValue();
    documentFragment.querySelector('.cell-input').addEventListener('keyup', this.captureInput.bind(cell));
    documentFragment.querySelector('.cell-input').addEventListener('blur',function () {
        document.querySelector('body').removeChild(document.querySelector('.cell-input'))
    });

    document.querySelector('body').appendChild(documentFragment);
    document.querySelector('.cell-input').focus();
};

DomController.prototype.captureInput = function () {
    this.setValue(event.target.value);
};



module.exports = new DomController();