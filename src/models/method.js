/**
 * Created by davidraleigh on 12/14/15.
 */
import Model from 'ampersand-model'
import ParameterCollection from './parameter-collection'
import wktParser from 'wellknown'
import has from 'amp-has'

export default Model.extend({
    props: {
        returnType: "string",
        results: "any"
    },

    collections: {
        parameters: ParameterCollection
    },

    getRequestValue(requestKey) {
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


    // TODO this cleanup logic should maybe enforced on the input instead of at the model?
    parseToWKTArray(wktGeometries) {
        var re = /(MULTIPOLYGON|MULTILINESTRING|MULTIPOINT|LINESTRING|POLYGON|POINT)/ig
        var results;
        let startIndex = 0;
        let endIndex = 0;
        let geometries = [];
        while ((results = re.exec(wktGeometries)) !== null) {
            endIndex = results.index;
            if (endIndex != 0) {
                // if the last char isn't a ')' value skip it (removes commas and other weird stuff)
                while (wktGeometries[endIndex - 1] != ')' && endIndex > startIndex) {
                    endIndex -= 1;
                }
                if (endIndex > startIndex) {
                    geometries.push(wktGeometries.slice(startIndex, endIndex).trim());
                }

            }

            startIndex = results.index;
        }
        endIndex = wktGeometries.length;

        // TODO maybe this whole logic flow would be prettier as a do-while? has a do-while ever been pretty?
        while (wktGeometries[endIndex - 1] != ')' && endIndex > startIndex) {
            endIndex -= 1;
        }

        if (endIndex > startIndex) {
            geometries.push(wktGeometries.slice(startIndex, endIndex).trim());
        }

        return geometries;
    },

    parseToGeoJSONArray(wktGeometries) {
        return this.parseToWKTArray(wktGeometries).map(function(value) {
            return wktParser(value);
        });
    },

    getGeometryObj(geometryKey) {
        var wktGeometries = this.getRequestValue(geometryKey);
        if (wktGeometries === null)
            return;

        return this.parseToGeoJSONArray(wktGeometries);
    },

    left_geojson_geometries() {
        return this.getGeometryObj("left_wkt_geometries");
    },

    right_geojson_geometries() {
        return this.getGeometryObj("right_wkt_geometries");
    }
});