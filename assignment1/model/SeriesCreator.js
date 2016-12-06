
function SeriesCreator() {

}

SeriesCreator.prototype.suggestSeriesFormulaFromInput = function () {
    return {
        valueType: this.getValueType(arguments),
        operator: null  
    };
};

SeriesCreator.prototype.getValueType = function () {
    var arg = Array.from(arguments);
    var valueType = this.getHomogenType(arg);
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