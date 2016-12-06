
function SeriesCreator() {

}

SeriesCreator.prototype.suggestSeriesFormulaFromInput = function () {
    var arg = Array.from(arguments);

    return {
        valueType: this.getHomogenType(arg),
        operator: this.getOperator(arg)
    }
};



SeriesCreator.prototype.getHomogenType = function (args) {
    var type = null;
    for(var arg in args){
            var testValue = args[arg].constructor;
            if(!type){
                type = testValue;
            }

            if(type !== testValue) {
                type = false;
                break;
            }
    }

    return type;
};

SeriesCreator.prototype.getOperator = function () {

};


module.exports = SeriesCreator;