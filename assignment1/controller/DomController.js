'use strict';

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

module.exports = new DomController();