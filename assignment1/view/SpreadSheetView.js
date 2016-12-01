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
    var fragment = domController.getElementForObject(this.spreadSheet);

    this.spreadSheet.rows.forEach(function (row) {

        var rowElement = domController.getElementForObject(row);
        row.cells.forEach(function (cell, b) {
            var cellElement = domController.getElementForObject(cell);
            rowElement.querySelector('.row').appendChild(cellElement);
        });
        fragment.firstElementChild.appendChild(rowElement);
    });
    return fragment;
};


module.exports = SpreadSheetView;