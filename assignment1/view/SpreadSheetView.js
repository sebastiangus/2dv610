var Spreadsheet = require('../model/Spreadsheet');

function SpreadSheetView(spreadsheet) {
    if(spreadsheet.constructor !== Spreadsheet) {
        throw new Error("SpreadSheetView can only be instantiated by passing reference to SpreadSheet");
    }

    this.spreadSheet = spreadsheet;

    this.addListenersToSubject();
}

SpreadSheetView.prototype.addListenersToSubject = function () {
    var test = function () {
        console.log("test");
    };
    var test2 = function () {
        console.log("test 2");
    };

    this.spreadSheet.addListener(test);
    this.spreadSheet.addListener(test2);

};

module.exports = SpreadSheetView;