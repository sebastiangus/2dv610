var domController = require('./controller/DomController');
var SpreadSheetFactory = require('./model/SpreadsheetFactory');
var spreadFactory = new SpreadSheetFactory();

var spread = spreadFactory.spreadsheet();
spread.appendDefaultTemplateToSelector();
console.log(spread);

