//http://chaijs.com/plugins/chai-webdriver/ for setup instructions

var expect = chai.expect;
var should = chai.should();
chai.use(require('chai-dom'));
var Factory = require('../../../model/SpreadsheetFactory');
var domController = require('../../../controller/DomController');
var View = require('../../../view/SpreadSheetView');

describe('cell-template', function () {

    it('html test', function () {
        //use import to get html-document
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#cell-template').should.have.html('<div class="cell"></div>');
    });
});

describe('row-template', function () {
    it('html test', function () {
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#row-template').should.have.html('<div class="row"></div>');
    });
});

describe('spreadsheet-template', function () {
    it('html test', function () {
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#spreadsheet-template').should.have.html('<div class="spreadsheet"></div>');
    });

    it('adding spreadsheet object adds spreadsheet-template to dom',function () {
        var factory = new Factory();
        var spread = factory.spreadsheet();
        spread.appendDefaultTemplateToSelector();
        expect(document.querySelector('.spreadsheet')).to.exist;
    });
});


describe('DomController', function () {
    it('getImportedTemplates should contain template tag',function () {
        var templates = domController.getImportedTemplates();
        expect(templates.querySelector('template'));
    });

    it('getTemplateNodeById(\'#spreadsheet\') should return instanceOf Node', function () {
        var template = domController.getTemplateNodeById('#spreadsheet-template');
        template.should.be.instanceOf(Node)
    });
});


describe('SpreadSheetView', function () {
    it('should create SpreadSheet in documentfragment containing 10 elements of row class', function () {
        var spread = new Factory().spreadsheet()
        var view = new View(spread);
        view.update();
        expect(document.querySelector(".spreadsheet")).to.length(10);
    });

});
