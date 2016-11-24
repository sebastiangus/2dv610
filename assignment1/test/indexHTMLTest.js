/**
 * Created by sebastiangustavsson on 2016-11-24.
 */
var sw = require('selenium-webdriver');
var driver = new sw.Builder()
    .withCapabilities(sw.Capabilities.chrome())
    .build();
var chai =require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();


describe('DOM tests', function () {
   
});


