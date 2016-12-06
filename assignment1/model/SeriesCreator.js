
function SeriesCreator() {

}

SeriesCreator.prototype.suggestSeriesFormulaFromInput = function () {
    return {valueType: this.getValueType(arguments)};
};

SeriesCreator.prototype.getValueType = function () {
    var valueType = null;
    var arg = Array.from(arguments);

    valueType = this.getHomogenType(arg);

    return valueType;
};

SeriesCreator.prototype.getHomogenType = function (args) {
    var type = null;
    for(var arg in args){

        for(var elem in args[arg]){

            var testValue = args[arg][elem].constructor;

            if(!type){
                type = testValue;
            }

            if(type !== testValue) {
                type = false;
                break;
            }
        }
    }

    return type;
};


module.exports = SeriesCreator;