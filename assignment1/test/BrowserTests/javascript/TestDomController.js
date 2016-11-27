/**
 * Created by sebastiangustavsson on 2016-11-26.
 */
'use strict';
var chai = require('chai');
var sinon = require('sinon');
var SpreadsheetFactory = require('../../../model/SpreadsheetFactory'); // Require the System to test
var spreadFactory = new SpreadsheetFactory();

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('DomController Test', function () {
    it('should return html-node', function () {
        spreadFactory.spreadsheet().appendToDOM();

    });
});