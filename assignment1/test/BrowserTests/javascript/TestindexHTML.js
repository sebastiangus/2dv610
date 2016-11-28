//http://chaijs.com/plugins/chai-webdriver/ for setup instructions

var expect = chai.expect;
var should = chai.should();
var Factory = require('../../../model/SpreadsheetFactory');
var DomController = require('../../../controller/DomController');
chai.use(require('chai-dom'));

describe('cell-template tests', function () {

    it('html test', function () {
        //use import to get html-document
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#cell-template').should.have.html('<div class="cell"></div>');
    });
});

describe('row-template tests', function () {
    it('html test', function () {
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#row-template').should.have.html('<div class="row"></div>');
    });
});

describe('spreadsheet-template tests', function () {
    it('html test', function () {
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#spreadsheet-template').should.have.html('<div class="spreadsheet"></div>');
    });

    it('adding spreadsheet object adds spreadsheet-template to dom',function () {
        var factory = new Factory();
        var spread = factory.spreadsheet();
        spread.appendToSelector();
        expect(document.querySelector('.spreadsheet')).to.exist;
    });
});


describe('DomController tests', function () {
    var domController = new DomController();


    it('Get templates',function () {
        domController.getImportedTemplates();
    });
})