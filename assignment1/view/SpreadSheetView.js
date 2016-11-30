var SpreadSheet = require('../model/Spreadsheet');
var domController = require('../controller/DomController');


function SpreadSheetView(spreadSheet) {
    if(spreadSheet.constructor !== SpreadSheet) {
        throw new Error("SpreadSheetView can only be instantiated by passing reference to SpreadSheet");
    }
    this.spreadSheet = spreadSheet;
    this.addListenersToSubject();
}

SpreadSheetView.prototype.addListenersToSubject = function () {
    this.spreadSheet.addListener(this.update.bind(this));
};

SpreadSheetView.prototype.update = function () {
    this.spreadSheet.appendDefaultTemplateToSelector();
};



module.exports = SpreadSheetView;