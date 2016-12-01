var SpreadSheet = require('../model/SpreadSheet');
var domController = require('../controller/DomController');


function SpreadSheetView(spreadSheet) {
    if(spreadSheet.constructor !== SpreadSheet) {
        throw new Error("SpreadSheetView can only be instantiated by passing reference to SpreadSheet");
    }

    this.spreadSheet = spreadSheet;
    this.addListenersToSubject();
};

SpreadSheetView.prototype.addListenersToSubject = function () {
    this.spreadSheet.addListener(this.update.bind(this));
};

SpreadSheetView.prototype.update = function () {
    var fragment = this.createDocFragmentFromSpreadSheet();
    requestAnimationFrame(function () {
       document.querySelector('body').appendChild(fragment);
    });
};

SpreadSheetView.prototype.createDocFragmentFromSpreadSheet = function(){
    var spreadSheet = domController.getElementForObject(this.spreadSheet);
    this.spreadSheet.rows.forEach(function (row) {
        rowElement = this.createRow(row);
        spreadSheet.firstElementChild.appendChild(rowElement);
    }.bind(this));

    return spreadSheet;
};

SpreadSheetView.prototype.createRow = function (row) {
    var rowElement = domController.getElementForObject(row);

    row.cells.forEach(function (cell) {
        var cellElement = this.createCell(cell);
        rowElement.querySelector('.row').appendChild(cellElement);
    }.bind(this));

    return rowElement
};

SpreadSheetView.prototype.createCell = function (cell) {
    var cellElement = domController.getElementForObject(cell);
    return cellElement;
};


module.exports = SpreadSheetView;