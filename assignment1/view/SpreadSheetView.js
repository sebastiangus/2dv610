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
        this.coupleElementWithObject(rowElement, cell);
    }.bind(this));

    return rowElement
};

SpreadSheetView.prototype.createCell = function (cell) {
    var cellElement = domController.getElementForObject(cell);
    var fragment = this.addListenersToCell(cellElement, cell);
    fragment.querySelector('p').innerHTML = cell.getValue();
    cell.addListener(this.updateCellElementTextContent.bind(cell));
    return fragment;
};

SpreadSheetView.prototype.addListenersToCell = function (cellElement, cell) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(cellElement);
    fragment.querySelector('.cell').addEventListener('click', function () {
        domController.activateCellForInput(cell);
    });
    return fragment;
};

SpreadSheetView.prototype.updateCellElementTextContent = function (cell) {
    this.element.querySelector('p').textContent = this.getValue();
};

SpreadSheetView.prototype.coupleElementWithObject = function(element, cell){
    cell.element = element.querySelector('.row').lastChild;
};




module.exports = SpreadSheetView;