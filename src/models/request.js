/**
 * Created by davidraleigh on 12/17/15.
 */
import Model from 'ampersand-model'

export default Model.extend({
    props: {
        operator: 'object',
        methodIndex: 'number'
    },

    derived: {
        method: {
            deps: ['operator', 'methodIndex'],
            fn: function () {
                return this.operator.executeMethods[this.methodIndex];
            }
        }
    },

    setParameterValue(parameterPosition, parameterValue) {
        this.method.parameters[parameterPosition].parameterValue = parameterValue;
    },

    query() {
        debugger;
        const method = this.operator.executeMethods[this.methodIndex];
        let obj = {};
        obj["operator_name"] = this.operator.operatorType;
        for (var i = 0; i < method.parameters.length; i++) {
            var param = method.parameters[i];
            if (param.hasOwnProperty("parameterKey") && method.parameters[i].hasOwnProperty("parameterValue")) {
                obj[param["parameterKey"]] = method.parameters[i].parameterValue;
            }
        }
        return JSON.stringify(obj, null, '\t');
    }
})