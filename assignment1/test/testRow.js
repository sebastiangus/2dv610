/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai =require('chai');
var Row = require('../model/Row');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Row tests', function(){
    var sut = new Row();

    afterEach(function () {
        sut = new Row();
    });

    it('row has propety cells', function () {
        sut.should.have.property('cells');
    });

    it('addCell should add element to cells', function () {
        sut.addCell();
    });
});