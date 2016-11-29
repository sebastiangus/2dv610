var SpreadSheet = require('../model/Spreadsheet');

function SpreadSheetView(spreadSheet) {
    if(spreadSheet.constructor !== SpreadSheet) {
        throw new Error("SpreadSheetView can only be instantiated by passing reference to SpreadSheet");
    }

    this.spreadSheet = spreadSheet;
    this.addListenersToSubject();
}

SpreadSheetView.prototype.addListenersToSubject = function () {
    this.spreadSheet.addListener();
};



module.exports = SpreadSheetView;