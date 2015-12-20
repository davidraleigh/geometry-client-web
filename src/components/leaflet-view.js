/**
 * Created by davidraleigh on 12/15/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import L from '../helpers/leaflet'
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
        return <div className='map' ref='mapClass' style={{height: '260px'}}></div>
    },

    //updateBounds() {
    //    debugger;
    //    let newBounds = null;
    //    if (this.state.left_geojson_geometries &&
    //        this.state.right_geojson_geometries) {
    //        newBounds = this.state.left_geometries_layer.getBounds();
    //        newBounds = newBounds.extend(this.state.right_geometries_layer.getBounds());
    //    } else if (this.state.left_geojson_geometries) {
    //        newBounds = this.state.left_geometries_layer.getBounds();
    //    }
    //
    //    if (newBounds != this.state.bounds) {
    //        this._map.fitBounds(newBounds);
    //        this.setState({bounds: new})
    //    }
    //},

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

    updateLeafletLayer(newGeoJSON, layerName) {
        if (this.state[layerName]) {
            // remove the previous geometries
            this._map.removeLayer(this.state[layerName]);
        }

        if (newGeoJSON) {
            // if the geomtries is not empty create a new layer
            let layer = L.geoJson(newGeoJSON, {style: {color: "#ff0000"}});
            this.setState({[layerName]: layer});
            layer.addTo(this._map);
            return layer;
        } else {
            // es6 computed keys :)
            this.setState({[layerName]: null});
            return null;
        }
    },

    componentDidUpdate(prevProps, prevState) {
        const {left_geojson_geometries, right_geojson_geometries, result_geometries} = this.props;
        debugger;

        // if nothing has changed among the geometries exit
        if (left_geojson_geometries === prevProps.left_geojson_geometries &&
            right_geojson_geometries === prevProps.right_geojson_geometries &&
            result_geometries === prevProps.result_geometries) {
            return;
        }

        let leftLayer = null;
        if (left_geojson_geometries != prevProps.left_geojson_geometries) {
            leftLayer = this.updateLeafletLayer(left_geojson_geometries, "left_geometries_layer");
        }

        let rightLayer = null;
        if (right_geojson_geometries != prevProps.right_geojson_geometries) {
            rightLayer = this.updateLeafletLayer(right_geojson_geometries, "right_geometries_layer");
        }

        const mergedBounds = this.mergeBounds(leftLayer, rightLayer);
        if (mergedBounds) {
            this._map.fitBounds(mergedBounds);
            //TODO is this set state really necessasry?
            this.setState({bounds: mergedBounds});
        }
    },

    componentDidMount() {
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

        this.setState({bounds: this._map.getBounds()});

        //var markerBlue = L.icon({
        //    iconUrl: markerImg
        //});
    }
})