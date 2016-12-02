/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai = require('chai');
var Cell = require('../model/Cell');

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Celltests', function(){
    var sut = new Cell();

    afterEach(function () {
        sut = new Cell();
    });

    it('should have property value', function () {
        sut.should.have.property('value');
    });

    it('should set value to 5',function () {
        sut.setValue(5);
    });

    it('should get value 5', function () {
        sut.setValue(5);
        expect(sut.getValue()).to.equal(5);
    })

    it('should have addListener property', function () {
        sut.should.have.attribute('addListener');
    })
});
