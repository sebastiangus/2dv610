//http://chaijs.com/plugins/chai-webdriver/ for setup instructions

var expect = chai.expect;
var should = chai.should();
chai.use(require('chai-dom'));

describe('DOM tests', function () {

    it('Class-test', function () {
        expect(document.querySelector('link[rel=import]')).to.have.html('template');
        console.log(importedHTML);
    });
});


