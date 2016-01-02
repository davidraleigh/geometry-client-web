/**
 * Created by davidraleigh on 12/15/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import L from '../helpers/leaflet-src'
import markerImg from '../styles/images/marker-icon.png'

export default React.createClass({

    getInitialState() {
        const {selectedOperator} = this.props;
        return {
            left_geometries_layer: null,
            right_geometries_layer: null,
            result_geometries_layer: null,
            bounds: null
        };
    },

    render() {
        return <div className='map' ref='mapClass' style={{height: '280px'}}></div>
    },

    mergeBounds(left_layer, right_layer) {
        if (left_layer === null && right_layer === null) {
            return null;
        } else if (left_layer === null) {
            return right_layer.getBounds();
        } else if (right_layer === null) {
            return left_layer.getBounds();
        }
        // TODO maybe there's a prettier leaflet function
        return right_layer.getBounds().extend(left_layer.getBounds());
    },

    updateLeafletLayer(newGeoJSON, layerName, styleDetails) {
        if (this.state[layerName]) {
            // remove the previous geometries
            this._map.removeLayer(this.state[layerName]);
        }

        // for points give them a circle
        //http://jsfiddle.net/erictheise/HQhzr/22/
        let featureOptions = {
            style : styleDetails,
            pointToLayer: function(feature, latlng) {
                return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85});
            }
        };

        if (newGeoJSON) {
            // if the geomtries is not empty create a new layer
            let layer = L.geoJson(newGeoJSON, featureOptions);
            this.setState({[layerName]: layer});
            layer.addTo(this._map);
            return layer;
        } else {
            // es6 computed keys :)
            this.setState({[layerName]: null});
            return null;
        }
    },


    componentDidUpdate(prevProps) {
        const {left_geojson_geometries, right_geojson_geometries, result_geojson_geometries} = this.props;

        // if nothing has changed among the geometries exit
        if (left_geojson_geometries === prevProps.left_geojson_geometries &&
            right_geojson_geometries === prevProps.right_geojson_geometries &&
            result_geojson_geometries === prevProps.result_geojson_geometries) {
            return;
        }

        let leftLayer = null;
        if (left_geojson_geometries != prevProps.left_geojson_geometries) {
            leftLayer = this.updateLeafletLayer(left_geojson_geometries, "left_geometries_layer",  {color : "#ff0000"});
        }

        let rightLayer = null;
        if (right_geojson_geometries != prevProps.right_geojson_geometries) {
            rightLayer = this.updateLeafletLayer(right_geojson_geometries, "right_geometries_layer", {color : "#0000ff"});
        }

        let resultLayer = null;
        if (result_geojson_geometries != prevProps.result_geojson_geometries) {
            resultLayer = this.updateLeafletLayer(result_geojson_geometries, "result_geometries_layer", {color : "#008000"});
        }

        let mergedBounds = this.mergeBounds(leftLayer, rightLayer);
        if (leftLayer === null && rightLayer === null && resultLayer != null)
            mergedBounds = resultLayer.getBounds();
        if (mergedBounds) {
            this._map.fitBounds(mergedBounds);
            //TODO is this set state really necessasry?
            this.setState({bounds: mergedBounds});
        }
    },

    componentDidMount() {
        const {left_geojson_geometries, right_geojson_geometries, result_geometries} = this.props;
        var mapElement = ReactDOM.findDOMNode(this.refs.mapClass);
        this._map = L.map(mapElement, {
            view: this.props.view,
            center: [51.505, -0.09],
            zoom: 13,
            minZoom: 2,
            maxZoom: 18,
            layers: [
                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    id: 'davidraleigh.kh7og6i2',
                    accessToken: 'pk.eyJ1IjoiZGF2aWRyYWxlaWdoIiwiYSI6InE0UnFZUGMifQ.lu_PnQlTypNzQ10tBGCkdw'
                })
            ]
        });

        let leftLayer = null;
        if (left_geojson_geometries) {
            leftLayer = this.updateLeafletLayer(left_geojson_geometries, "left_geometries_layer",  {color : "#ff0000"});
        }

        let rightLayer = null;
        if (right_geojson_geometries) {
            rightLayer = this.updateLeafletLayer(right_geojson_geometries, "right_geometries_layer",  {color : "#0000ff"});
        }

        const mergedBounds = this.mergeBounds(leftLayer, rightLayer);
        if (mergedBounds) {
            this._map.fitBounds(mergedBounds);
            //TODO is this set state really necessasry?
            this.setState({bounds: mergedBounds});
        } else {
            this.setState({bounds: this._map.getBounds()});
        }
    }
})