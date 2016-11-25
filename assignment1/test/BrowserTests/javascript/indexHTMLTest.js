//http://chaijs.com/plugins/chai-webdriver/ for setup instructions

var expect = chai.expect;
var should = chai.should();
chai.use(require('chai-dom'));

describe('DOM tests', function () {

    it('Class-test', function () {
        //use import to get html-document
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#cell-template').should.have.html('<div class="cell"></div>');
    });
});


