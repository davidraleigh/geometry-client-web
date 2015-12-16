/**
 * Created by davidraleigh on 12/10/15.
 */
import Model from 'ampersand-model'
import OperatorCollection from './operator-collection'
import MethodCollection from './method-collection'

export default Model.extend({
    props: {
        operatorType: 'string',
        executeMethods: 'object'
    }
});


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
//    {
//        "operatorType" : "Difference",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "subtractor"
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
//            },
//            {
//                "returnType" : "Geometry",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeometry"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "subtractor"
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
//    {
//        "operatorType" : "Relate",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 3,
//                        "parameterType" : "String",
//                        "parameterName" : "de_9im_string"
//                    },
//                    {
//                        "parameterPosition" : 4,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        "operatorType" : "Equals",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Disjoint",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Intersects",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Within",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Contains",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Crosses",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Touches",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Overlaps",
//        "executeMethods" : [
//            {
//                "returnType" : "Boolean",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom1"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "inputGeom2"
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
//    {
//        "operatorType" : "Buffer",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries",
//                        "value" : "POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2, 3 2, 3 3, 2 3,2 2))"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Double[]",
//                        "parameterName" : "distances",
//                        "value" : 2.0
//                    },
//                    {
//                        "parameterPosition" : 3,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bUnion",
//                        "value" : false
//                    },
//                    {
//                        "parameterPosition" : 4,
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
//                        "parameterName" : "inputGeometry",
//                        "value" : "POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2, 3 2, 3 3, 2 3,2 2))"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr",
//                        "value" : 4326
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "distance",
//                        "value" : 2.0
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
//    {
//        "operatorType" : "Distance",
//        "executeMethods" : [
//            {
//                "returnType" : "Double",
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
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        "operatorType" : "Intersection",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "intersector"
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
//            },
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "input_geometries"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "intersector"
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
//                        "parameterName" : "progress_tracker"
//                    },
//                    {
//                        "parameterPosition" : 4,
//                        "parameterType" : "Int32",
//                        "parameterName" : "dimensionMask"
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
//                        "parameterName" : "inputGeometry"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "intersector"
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
//    {
//        "operatorType" : "Clip",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "geoms"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "Envelope2D",
//                        "parameterName" : "envelope"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "spatialRef"
//                    },
//                    {
//                        "parameterPosition" : 3,
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
//                        "parameterName" : "geom"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "Envelope2D",
//                        "parameterName" : "envelope"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "spatialRef"
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
//    {
//        "operatorType" : "Cut",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bConsiderTouch"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "cuttee"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Polyline",
//                        "parameterName" : "cutter"
//                    },
//                    {
//                        "parameterPosition" : 3,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "spatialReference"
//                    },
//                    {
//                        "parameterPosition" : 4,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        "operatorType" : "DensifyByLength",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "maxLength"
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
//                        "parameterName" : "inputGeometry"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "maxLength"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        "operatorType" : "Simplify",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "geoms"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bForceSimplify"
//                    },
//                    {
//                        "parameterPosition" : 3,
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
//                        "parameterName" : "geom"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bForceSimplify"
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
//    {
//        "operatorType" : "SimplifyOGC",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "geoms"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bForceSimplify"
//                    },
//                    {
//                        "parameterPosition" : 3,
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
//                        "parameterName" : "geom"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bForceSimplify"
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
//    {
//        "operatorType" : "Offset",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
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
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "distance"
//                    },
//                    {
//                        "parameterPosition" : 3,
//                        "parameterType" : "JoinType",
//                        "parameterName" : "joins"
//                    },
//                    {
//                        "parameterPosition" : 4,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "bevelRatio"
//                    },
//                    {
//                        "parameterPosition" : 5,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "flattenError"
//                    },
//                    {
//                        "parameterPosition" : 6,
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
//                        "parameterName" : "inputGeometry"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "wkid_sr",
//                        "parameterType" : "SpatialReference",
//                        "parameterName" : "sr"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "distance"
//                    },
//                    {
//                        "parameterPosition" : 3,
//                        "parameterType" : "JoinType",
//                        "parameterName" : "joins"
//                    },
//                    {
//                        "parameterPosition" : 4,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "bevelRatio"
//                    },
//                    {
//                        "parameterPosition" : 5,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "flattenError"
//                    },
//                    {
//                        "parameterPosition" : 6,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progressTracker"
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        "operatorType" : "Generalize",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "geoms"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "maxDeviation"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bRemoveDegenerateParts"
//                    },
//                    {
//                        "parameterPosition" : 3,
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
//                        "parameterName" : "geom"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "input_doubles",
//                        "parameterType" : "Double",
//                        "parameterName" : "maxDeviation"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "bRemoveDegenerateParts"
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
//    {
//        "operatorType" : "SymmetricDifference",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "inputGeometries"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "rightGeometry"
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
//            },
//            {
//                "returnType" : "Geometry",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "leftGeometry"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "rightGeometry"
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
//    {
//        "operatorType" : "ConvexHull",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "geoms"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "b_merge"
//                    },
//                    {
//                        "parameterPosition" : 2,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progress_tracker"
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
//                        "parameterName" : "geom",
//                        "value" : "POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2, 3 2, 3 3, 2 3,2 2))"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progress_tracker"
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        "operatorType" : "Boundary",
//        "executeMethods" : [
//            {
//                "returnType" : "GeometryCursor",
//                "parameters" : [
//                    {
//                        "parameterPosition" : 0,
//                        "parameterKey" : "left_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "geoms"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progress_tracker"
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
//                        "parameterName" : "geom"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "ProgressTracker",
//                        "parameterName" : "progress_tracker"
//                    }
//                ]
//            }
//        ]
//    }
//];