var domController = require('./controller/DomController');
var SpreadSheetFactory = require('./model/SpreadsheetFactory');
var spreadFactory = new SpreadSheetFactory();
var View = require('./view/SpreadSheetView');

var spread = spreadFactory.spreadsheet(10,10);
var view = new View(spread);

