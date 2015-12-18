/**
 * Created by davidraleigh on 12/15/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import L from '../helpers/leaflet'
import markerImg from '../styles/images/marker-icon.png'

export default React.createClass({
    render() {
        return <div className='map' ref='mapClass' style={{height: '260px'}}></div>
    },

    componentWillReceiveProps(nextProps) {
        //const {left_wkt_geometries, right_wkt_geometries, result_geometries} = this.props;
        debugger;
        //var polygon = L.polygon([
        //    [51.509, -0.08],
        //    [51.503, -0.06],
        //    [51.51, -0.047]
        //]).addTo(this._map);
        //this.setState({query: query});
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

        var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [ [51.5072, 0.1275], [52.5072, 0.1275], [52.5072, 1.1275],
                        [51.5072, 1.1275], [51.5072, 0.1275] ]
                ]
            }
        };

        var markerBlue = L.icon({
            iconUrl: markerImg
        });
        L.marker([51.5, -0.09], {icon: markerBlue}).addTo(this._map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        L.geoJson(geojsonFeature, {style: {color: "#ff0000"}}).addTo(this._map);
        var circle = L.circle([51.508, -0.11], 500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(this._map);
        var polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(this._map);
        L.polygon([ [51.5072, 0.1275], [52.5072, 0.1275], [52.5072, 1.1275],
            [51.5072, 1.1275], [51.5072, 0.1275] ]).addTo(this._map);
    }
})