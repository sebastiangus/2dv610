/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai =require('chai');
var Row = require('../model/Row');
var Cell = require('../model/Cell');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Row tests', function(){
    var sut = new Row();

    afterEach(function () {
        sut = new Row();
    });

    it('should have property cells', function () {
        sut.should.have.property('cells');
    });

    it('should have cells array of length 1 after instantiation', function () {
        expect(sut.cells).length(1);
    });

    it('should add element of type Cell to cells array', function () {
       sut.addCell();
        expect(sut.cells[0]).to.be.instanceOf(Cell);
    });

    it('should have cells array of length 5', function () {
        sut.addCell(4);
        expect(sut.cells).length(5);
    })
});