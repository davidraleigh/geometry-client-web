/**
 * Created by davidraleigh on 12/17/15.
 */
import Model from 'ampersand-model'
import wellknown from 'wellknown'

export default Model.extend({
    props: {
        operator: 'object',
        methodIndex: 'number',
        //left_geojson_geometries: "",
        //right_geojson_geometries: "",
        //result_geometries: ""
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
        debugger;
        this.method.parameters[parameterPosition].parameterValue = parameterValue;
    },

    query() {
        debugger;
        return this.operator.query;
    }
})