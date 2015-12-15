/**
 * Created by davidraleigh on 12/14/15.
 */
import Model from 'ampersand-model'
import ParameterCollection from './parameter-collection'

export default Model.extend({
    props: {
        parameterPosition: 'int',
        parameterName: 'string',
        parameterType: 'string',
        parameterKey: 'string'
    },

    collections: {
        parameters: ParameterCollection
    }
});


//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries"
