/**
 * Created by davidraleigh on 12/14/15.
 */
import Model from 'ampersand-model'
import ParameterCollection from './parameter-collection'
import wktParser from 'wellknown'
import has from 'amp-has'

export default Model.extend({
    props: {
        returnType: "string"
    },

    collections: {
        parameters: ParameterCollection
    },

    getRequestValue(requestKey) {
        debugger;
        for (var i = 0; i < this.parameters.length; i++) {
            var param = this.parameters.at(i);
            var properties = param.getAttributes({props: true});
            if (has(properties, "parameterKey") &&
                has(properties, "parameterValue") &&
                param["parameterKey"] === requestKey) {
                return param.parameterValue;
            }
        }
        return null;
    },

    getGeometryObj(geometryKey) {
        var wktGeometries = this.getRequestValue(geometryKey);
        if (wktGeometries === null)
            return;
        return wktParser(wktGeometries);
    },

    left_geojson_geometries() {
        return this.getGeometryObj("left_wkt_geometries");
    },

    right_geojson_geometries() {
        return this.getGeometryObj("right_wkt_geometries");
    }
});