/**
 * Created by sebastiangustavsson on 2016-11-23.
 */
var chai = require('chai');
var Cell = require('../model/Cell');
var sinon = require('sinon');

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
        sut.should.have.property('addListener');
    })

    it('addListener should push listener to listeners array', function () {
        var listener = sinon.spy();
        sut.addListener(listener);

        expect(sut).to.have.property('listeners');
        sut.listeners.should.have.length(1);
    });

    it('should invoke 1 registered listener', function () {
        var testListener = sinon.spy();
        sut.addListener(testListener);
        sut.notifyListeners();
        assert(testListener.calledOnce);
    });

    it('should invoke 5 registered listeners', function () {
        var testListener = sinon.spy();
        sut.addListener(testListener); //1
        sut.addListener(testListener); //2
        sut.addListener(testListener); //3
        sut.addListener(testListener); //4
        sut.addListener(testListener); //5
        sut.notifyListeners();
        assert(testListener.callCount == 5)
    });
});
