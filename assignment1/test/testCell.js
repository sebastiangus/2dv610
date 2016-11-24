/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai =require('chai');
var Cell = require('../model/Cell');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Row tests', function(){
    var sut = new Cell();

    afterEach(function () {
        sut = new Cell();
    });

    it('cell has propety value', function () {
        sut.should.have.property('value');
    });

    it('cell setValue sets value',function () {
        sut.setValue(5);
    });
});