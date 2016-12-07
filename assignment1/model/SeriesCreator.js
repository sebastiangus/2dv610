
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

SeriesCreator.prototype.getOperator = function (args) {
    var operator;
    var valueFromPrevLoop;
    var differenceFromPrevLoop;
    var differenceFromCurrentLoop;

    for(var num in args){

        if(valueFromPrevLoop == undefined) {
            differenceFromCurrentLoop = null
        } else {
            differenceFromCurrentLoop = valueFromPrevLoop - args[num];
        }

        if(differenceFromPrevLoop == differenceFromCurrentLoop) {
            valueFromPrevLoop < args[num] ? operator = "+" : operator = "-";
        } else if(differenceFromCurrentLoop !== null && differenceFromPrevLoop !== differenceFromCurrentLoop) {
            operator = "not available"
        }

        differenceFromPrevLoop = differenceFromCurrentLoop;
        valueFromPrevLoop = args[num];
    }

    return operator;
};


module.exports = SeriesCreator;