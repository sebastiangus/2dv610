var domController = require('./controller/DomController');
var spreadSheetFactory = require('./model/SpreadsheetFactory');
var View = require('./view/SpreadSheetView');

var spread = spreadSheetFactory.spreadsheet(10,10);
var view = new View(spread);
view.update();