//http://chaijs.com/plugins/chai-webdriver/ for setup instructions

var expect = chai.expect;
var should = chai.should();
chai.use(require('chai-dom'));
var factory = require('../../../model/SpreadsheetFactory');
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
        var spread = factory.spreadsheet(10,10);
        domController.appendDefaultTemplateToSelector(spread);
        expect(document.querySelector('.spreadsheet')).to.exist;
        document.querySelector('body').removeChild(document.querySelector('.spreadsheet'));
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
    it('should create SpreadSheet in dom containing 10 elements of row class', function () {
        var spread = factory.spreadsheet(10);
        var view = new View(spread);
        view.update();
        requestAnimationFrame(function () {
            expect(document.querySelector('.spreadsheet')).to.have.length(10);
        });

    });

    it('should create SpreadSheet in dom containing row element containing 10 elements', function () {
        //remove .spreadsheet element, to clean dom
        requestAnimationFrame(function () {
            document.querySelector('body').removeChild(document.querySelector('.spreadsheet'));
        });
        var spread = factory.spreadsheet(1,10);
        var view = new View(spread);
        view.update();
        requestAnimationFrame(function () {
            expect(document.querySelector('.spreadsheet')).to.have.length(1);
            expect(document.querySelector('.row')).to.have.length(10);
        })
    })
});


