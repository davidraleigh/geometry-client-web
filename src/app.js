import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'
import OperatorCollection from './models/operator-collection'
import Parameter from './models/parameter'
import operators from './operators.json'

window.app = app;

app.extend({
	init() {
		this.operators = new OperatorCollection(operators);
		this.selectedOperator = this.operators.at(0);
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();


// Proximity2D
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
//                        "parameterName" : "inputGeometries",
//                        "parameterValue" : "MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), ((20 35, 45 20, 30 5, 10 10, 10 30, 20 35), (30 20, 20 25, 20 15, 30 20)))\nPOLYGON ((30 10, 40 40, 20 40, 10 20, 30 10))"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "GeometryCursor",
//                        "parameterName" : "rightGeometry",
//                        "parameterValue" : "MULTIPOLYGON (((30 25, 45 40, 1 42, 30 25)),((15 5, 45 10, 15 20, 2 19, 15 5))) "
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
//                        "parameterName" : "leftGeometry",
//                        "parameterValue": "MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), ((20 35, 45 20, 30 5, 10 10, 10 30, 20 35), (30 20, 20 25, 20 15, 30 20))) "
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterKey" : "right_wkt_geometries",
//                        "parameterType" : "Geometry",
//                        "parameterName" : "rightGeometry",
//                        "parameterValue":"MULTIPOLYGON (((30 20, 45 40, 10 40, 30 20)),((15 5, 40 10, 10 20, 5 10, 15 5))) "
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
//                        "parameterName" : "geoms",
//                        "parameterValue" : "MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), ((20 35, 45 20, 30 5, 10 10, 10 30, 20 35), (30 20, 20 25, 20 15, 30 20)))\nPOLYGON ((130 10, 140 40,  130 35, 120 40, 110 20, 130 10))\nMULTIPOLYGON (((90 20, 105 40, 70 40, 90 20)),((75 5, 100 10, 100 20, 65 10, 75 5)))"
//                    },
//                    {
//                        "parameterPosition" : 1,
//                        "parameterType" : "Boolean",
//                        "parameterKey" : "input_booleans",
//                        "parameterName" : "b_merge",
//                        "parameterValue" : false
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
//                        "parameterValue" : "MULTIPOLYGON (((15 5, 23.333333333333336 6.6666666666666661, 30 5, 33.75 8.7500000000000018, 40 10, 36.25 11.25, 45 20, 35.277777777777779 25.833333333333332, 36 28, 39.827586206896555 33.103448275862071, 45 30, 42 36, 45 40, 40 40, 20 45, 28.333333333333339 40, 20 40, 10 40, 16.666666666666664 33.333333333333329, 10 30, 10 20, 5 10, 15 5)))"
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
//                        "parameterName" : "geoms",
//                        "parameterValue" : "MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), ((20 35, 45 20, 30 5, 10 10, 10 30, 20 35), (30 20, 20 25, 20 15, 30 20)))\nPOLYGON ((130 10, 140 40,  130 35, 120 40, 110 20, 130 10))\nMULTIPOLYGON (((90 20, 105 40, 70 40, 90 20)),((75 5, 100 10, 100 20, 65 10, 75 5)))"
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
//                        "parameterName" : "geom",
//                        "parameterValue" : "MULTIPOLYGON (((15 5, 23.333333333333336 6.6666666666666661, 30 5, 33.75 8.7500000000000018, 40 10, 36.25 11.25, 45 20, 35.277777777777779 25.833333333333332, 36 28, 39.827586206896555 33.103448275862071, 45 30, 42 36, 45 40, 40 40, 20 45, 28.333333333333339 40, 20 40, 10 40, 16.666666666666664 33.333333333333329, 10 30, 10 20, 5 10, 15 5)))"
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
//        "opertorType": "Proximity2D",
//        "executeMethods": [
//            {
//                "returnType": "Proximity2DResult",
//                "parameters": [
//                    {
//                        "parameterPosition": 0,
//                        "parameterType": "Geometry",
//                        "parameterName": "geom"
//                    },
//                    {
//                        "parameterPosition": 1,
//                        "parameterType": "Point",
//                        "parameterName": "inputPoint"
//                    },
//                    {
//                        "parameterPosition": 2,
//                        "parameterType": "Boolean",
//                        "parameterName": "bTestPolygonInterior"
//                    },
//                    {
//                        "parameterPosition": 3,
//                        "parameterType": "Boolean",
//                        "parameterName": "bCalculateLeftRightSide"
//                    }
//                ]
//            },
//            {
//                "returnType": "Proximity2DResult",
//                "parameters": [
//                    {
//                        "parameterPosition": 0,
//                        "parameterType": "Geometry",
//                        "parameterName": "geom"
//                    },
//                    {
//                        "parameterPosition": 1,
//                        "parameterType": "Point",
//                        "parameterName": "inputPoint"
//                    },
//                    {
//                        "parameterPosition": 2,
//                        "parameterType": "Boolean",
//                        "parameterName": "bTestPolygonInterior"
//                    }
//                ]
//            },
//            {
//                "returnType": "Proximity2DResult",
//                "parameters": [
//                    {
//                        "parameterPosition": 0,
//                        "parameterType": "Geometry",
//                        "parameterName": "geom"
//                    },
//                    {
//                        "parameterPosition": 1,
//                        "parameterType": "Point",
//                        "parameterName": "inputPoint"
//                    }
//                ]
//            },
//            {
//                "returnType": "Proximity2DResult[]",
//                "parameters": [
//                    {
//                        "parameterPosition": 0,
//                        "parameterType": "Geometry",
//                        "parameterName": "geom"
//                    },
//                    {
//                        "parameterPosition": 1,
//                        "parameterType": "Point",
//                        "parameterName": "inputPoint"
//                    },
//                    {
//                        "parameterPosition": 2,
//                        "parameterType": "Double",
//                        "parameterName": "searchRadius"
//                    },
//                    {
//                        "parameterPosition": 3,
//                        "parameterType": "Int32",
//                        "parameterName": "maxVertexCountToReturn"
//                    }
//                ]
//            }
//        ]
//    }
