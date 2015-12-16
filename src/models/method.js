/**
 * Created by davidraleigh on 12/14/15.
 */
import Model from 'ampersand-model'
import MethodCollection from './method-collection'

export default Model.extend({
    props: {
        returnType: "string",
        parameters: "object"
    }
})

//var operatorDetails = [
//    {
//        "operatorType" : "Union",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryArray",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            },
//            {
//                "returnType" : "Geometry",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "geom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "geom2"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 3,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            }
//        ]
//    },