import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'
import OperatorCollection from './models/operator-collection'
import Parameter from './models/parameter'

// access app from console
window.app = app;

var operators = [
    {
        "operatorType" : "Union",
        "executeMethods" : [
            {
                "returnType" : "GeometryArray",
                "parameters" : [
                    {
                        "parameterPosition" : 0,
                        "parameterKey" : "left_wkt_geometries",
                        "parameterType" : "GeometryCursor",
                        "parameterName" : "inputGeometries"
                    },
                    {
                        "parameterPosition" : 1,
                        "parameterKey" : "wkid_sr",
                        "parameterType" : "SpatialReference",
                        "parameterName" : "sr"
                    },
                    {
                        "parameterPosition" : 2,
                        "parameterType" : "ProgressTracker",
                        "parameterName" : "progressTracker"
                    }
                ]
            },
            {
                "returnType" : "Geometry",
                "parameters" : [
                    {
                        "parameterPosition" : 0,
                        "parameterKey" : "left_wkt_geometries",
                        "parameterType" : "Geometry",
                        "parameterName" : "geom1"
                    },
                    {
                        "parameterPosition" : 1,
                        "parameterKey" : "right_wkt_geometries",
                        "parameterType" : "Geometry",
                        "parameterName" : "geom2"
                    },
                    {
                        "parameterPosition" : 2,
                        "parameterKey" : "wkid_sr",
                        "parameterType" : "SpatialReference",
                        "parameterName" : "sr"
                    },
                    {
                        "parameterPosition" : 3,
                        "parameterType" : "ProgressTracker",
                        "parameterName" : "progressTracker"
                    }
                ]
            }
        ]
    },
    {
        "operatorType" : "Difference",
        "executeMethods" : [
            {
                "returnType" : "GeometryCursor",
                "parameters" : [
                    {
                        "parameterPosition" : 0,
                        "parameterKey" : "left_wkt_geometries",
                        "parameterType" : "GeometryCursor",
                        "parameterName" : "inputGeometries"
                    },
                    {
                        "parameterPosition" : 1,
                        "parameterKey" : "right_wkt_geometries",
                        "parameterType" : "GeometryCursor",
                        "parameterName" : "subtractor"
                    },
                    {
                        "parameterPosition" : 2,
                        "parameterKey" : "wkid_sr",
                        "parameterType" : "SpatialReference",
                        "parameterName" : "sr"
                    },
                    {
                        "parameterPosition" : 3,
                        "parameterType" : "ProgressTracker",
                        "parameterName" : "progressTracker"
                    }
                ]
            },
            {
                "returnType" : "Geometry",
                "parameters" : [
                    {
                        "parameterPosition" : 0,
                        "parameterKey" : "left_wkt_geometries",
                        "parameterType" : "Geometry",
                        "parameterName" : "inputGeometry"
                    },
                    {
                        "parameterPosition" : 1,
                        "parameterKey" : "right_wkt_geometries",
                        "parameterType" : "Geometry",
                        "parameterName" : "subtractor"
                    },
                    {
                        "parameterPosition" : 2,
                        "parameterKey" : "wkid_sr",
                        "parameterType" : "SpatialReference",
                        "parameterName" : "sr"
                    },
                    {
                        "parameterPosition" : 3,
                        "parameterType" : "ProgressTracker",
                        "parameterName" : "progressTracker"
                    }
                ]
            }
        ]
    },
    {
        "operatorType" : "Relate",
        "executeMethods" : [
            {
                "returnType" : "Boolean",
                "parameters" : [
                    {
                        "parameterPosition" : 0,
                        "parameterKey" : "left_wkt_geometries",
                        "parameterType" : "Geometry",
                        "parameterName" : "inputGeom1"
                    },
                    {
                        "parameterPosition" : 1,
                        "parameterKey" : "right_wkt_geometries",
                        "parameterType" : "Geometry",
                        "parameterName" : "inputGeom2"
                    },
                    {
                        "parameterPosition" : 2,
                        "parameterKey" : "wkid_sr",
                        "parameterType" : "SpatialReference",
                        "parameterName" : "sr"
                    },
                    {
                        "parameterPosition" : 3,
                        "parameterType" : "String",
                        "parameterName" : "de_9im_string"
                    },
                    {
                        "parameterPosition" : 4,
                        "parameterType" : "ProgressTracker",
                        "parameterName" : "progressTracker"
                    }
                ]
            }
        ]
    }
    ];

app.extend({
	init() {
        var temp = operators[0]["executeMethods"][0]["parameters"][0];
        var test = new Parameter(operators[0]["executeMethods"][0]["parameters"][0])
		this.operatorCollection = new OperatorCollection(operators);
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();