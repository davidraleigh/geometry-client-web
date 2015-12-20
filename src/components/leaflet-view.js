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
            left_geometries_layer: "",
            right_geometries_layer: "",
            left_geojson_geometries: "",
            right_geojson_geometries: "",
            result_geometries: "",
            bounds: ""
        };
    },

    render() {
        return <div className='map' ref='mapClass' style={{height: '260px'}}></div>
    },


    componentDidUpdate(prevProps) {
        debugger;
        const {left_geojson_geometries, right_geojson_geometries, result_geometries} = this.props;
        let newBounds = null;
        if (left_geojson_geometries && this.state.left_geojson_geometries != left_geojson_geometries) {
            if (this.state.left_geometries_layer) {
                this._map.removeLayer(this.state.left_geometries_layer);
            }
            let layer = L.geoJson(left_geojson_geometries, {style: {color: "#ff0000"}});

            if (!newBounds) {
                newBounds = layer.getBounds();
            }

            this.setState({left_geometries_layer: layer});
            this.setState({left_geojson_geometries: left_geojson_geometries});
            layer.addTo(this._map);

            //bounds = bounds.extend(this.state.bounds)

        }
        if (right_geojson_geometries && this.state.right_geojson_geometries != right_geojson_geometries) {
            if (this.state.right_geometries_layer) {
                this._map.removeLayer(this.state.right_geometries_layer);
            }
            let layer = L.geoJson(right_geojson_geometries, {style: {color: "#ff0000"}});

            if (!newBounds) {
                newBounds = layer.getBounds();
            } else {
                newBounds = newBounds.extend(layer.getBounds());
            }

            this.setState({right_geometries_layer: layer});
            this.setState({right_geojson_geometries: right_geojson_geometries});
            layer.addTo(this._map);
        }

        if (newBounds) {
            this._map.fitBounds(newBounds);
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

        //var geojsonFeature = {
        //    "type": "Feature",
        //    "properties": {
        //        "name": "Coors Field",
        //        "amenity": "Baseball Stadium",
        //        "popupContent": "This is where the Rockies play!"
        //    },
        //    "geometry": {
        //        "type": "Polygon",
        //        "coordinates": [
        //            [ [51.5072, 0.1275], [52.5072, 0.1275], [52.5072, 1.1275],
        //                [51.5072, 1.1275], [51.5072, 0.1275] ]
        //        ]
        //    }
        //};

        //var markerBlue = L.icon({
        //    iconUrl: markerImg
        //});
        //L.marker([51.5, -0.09], {icon: markerBlue}).addTo(this._map)
        //    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //    .openPopup();
        //L.geoJson(geojsonFeature, {style: {color: "#ff0000"}}).addTo(this._map);
        //var circle = L.circle([51.508, -0.11], 500, {
        //    color: 'red',
        //    fillColor: '#f03',
        //    fillOpacity: 0.5
        //}).addTo(this._map);
        //var polygon = L.polygon([
        //    [51.509, -0.08],
        //    [51.503, -0.06],
        //    [51.51, -0.047]
        //]).addTo(this._map);
        //L.polygon([ [51.5072, 0.1275], [52.5072, 0.1275], [52.5072, 1.1275],
        //    [51.5072, 1.1275], [51.5072, 0.1275] ]).addTo(this._map);
    }
})