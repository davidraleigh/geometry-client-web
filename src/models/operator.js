/**
 * Created by davidraleigh on 12/10/15.
 */
import Model from 'ampersand-model'
import MethodCollection from './method-collection'
import has from 'amp-has'


function isNumeric(num) {
    if (num === 'true' || num === 'false' || num === false || num === true)
        return false;
    return !isNaN(num)
}

function parseToArray(input, previousArray) {
    let result = previousArray ? previousArray : [];
    if (typeof input === 'string') {
        let splitInput = input.split(/[ ,]+/);

        if (isNumeric(splitInput[0])) {
            for (var i = 0; i < splitInput.length; i++) {
                let number = splitInput[i];
                if (number.length > 0){
                    result.push(Number(number));
                    console.log("numerics push", result);
                }
            }
            return result;
        } else {
            console.log("not numeric", splitInput);
            return splitInput;
        }
    }
    result.push(input);
    return result;
}


export default Model.extend({
    props: {
        operatorType: 'string'
    },

    collections: {
        executeMethods: MethodCollection
    },

    session: {
        methodIndex: {
            type: 'number',
            default: 0
        }
    },

    derived: {
        method: {
            deps: ['methodIndex'],
            fn: function () {
                return this.executeMethods.at(this.methodIndex);
            }
        }
    },

    query() {
        let obj = {};
        obj["operator_name"] = this.operatorType;
        for (var i = 0; i < this.method.parameters.length; i++) {
            const param = this.method.parameters.at(i);
            const properties = param.getAttributes({props: true});
            if (has(properties,"parameterKey") && has(properties, "parameterValue")) {
                if (param.parameterValue === null || param.parameterValue.length === 0) {
                    continue;
                }
                if (param["parameterKey"] != "left_wkt_geometries" &&
                    param["parameterKey"] != "right_wkt_geometries" &&
                    param["parameterKey"] != "input_doubles" &&
                    param["parameterKey"] != "input_booleans" &&
                    param["parameterKey"] != "input_integers") {
                    obj[param["parameterKey"]] = param.parameterValue;
                } else if (param["parameterKey"] === "left_wkt_geometries" ||
                           param["parameterKey"] === "right_wkt_geometries") {
                    obj[param["parameterKey"]] = this.method.parseToWKTArray(param.parameterValue);
                } else if (has(obj, param["parameterKey"])){
                    obj[param["parameterKey"]] = parseToArray(param.parameterValue, obj[param["parameterKey"]]);
                } else {
                    obj[param["parameterKey"]] = parseToArray(param.parameterValue);
                }

            }
        }
        return JSON.stringify(obj, null, '\t');
    },

    setParameterValue(parameterPosition, parameterValue) {
        this.method.parameters.at(parameterPosition).parameterValue = parameterValue;
    }
});