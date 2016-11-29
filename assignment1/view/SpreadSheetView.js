var Spreadsheet = require('../model/Spreadsheet');

function SpreadSheetView(spreadsheet) {
    if(spreadsheet.constructor !== Spreadsheet) {
        throw new Error("SpreadSheetView can only be instantiated by passing reference to SpreadSheet");
    }
}


module.exports = SpreadSheetView;