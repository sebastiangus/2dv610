
function SeriesCreator() {

}

SeriesCreator.prototype.suggestSeriesFormulaFromInput = function () {
    return {valueType: 'numbers'};
};

module.exports = SeriesCreator;