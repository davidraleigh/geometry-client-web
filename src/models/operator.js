/**
 * Created by davidraleigh on 12/10/15.
 */
import Model from 'ampersand-model'
import MethodCollection from './method-collection'
import has from 'amp-has'
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
            var param = this.method.parameters.at(i);
            var properties = param.getAttributes({props: true});
            if (has(properties,"parameterKey") && has(properties, "parameterValue")) {
                if (param["parameterKey"] != "left_wkt_geometries" &&
                    param["parameterKey"] != "right_wkt_geometries" &&
                    param["parameterKey"] != "input_doubles") {
                    obj[param["parameterKey"]] = param.parameterValue;
                } else {
                    obj[param["parameterKey"]] = [param.parameterValue];
                }

            }
        }
        return JSON.stringify(obj, null, '\t');
    },

    setParameterValue(parameterPosition, parameterValue) {
        this.method.parameters.at(parameterPosition).parameterValue = parameterValue;
    }
});