/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import L from './../helpers/leaflet'
import mainStyle from '../styles/main.css'

export default React.createClass({
    componentDidMount: function() {
        var mapElement = ReactDOM.findDOMNode(this.refs.mapClass);
        this.map = L.map(mapElement, {
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
    },
    render: function() {
        return (
            <div className='map' ref='mapClass' style={{height: '400px'}}></div>
        );
    }
});

//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 18,
//    id: 'davidraleigh.kh7og6i2',
//    accessToken: 'pk.eyJ1IjoiZGF2aWRyYWxlaWdoIiwiYSI6InE0UnFZUGMifQ.lu_PnQlTypNzQ10tBGCkdw'
//}).addTo(map);
//},
//
//componentWillUnmount() {
//    this.map.off('click', this.onMapClick);
//    this.map = null;
//},
//
//render: function() {
//    return (
//        <div className='map'></div>
//    );
//}
//})

//export default React.createClass({
//
//    render() {
//        view = new LeafletView(this.props.location, 13);
//        onViewChange = {this._onViewChange}
//        return (
//            <LeafletMap view={view}>
//                <LeafletTileLayer urlTemplate='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
//                <LeafletMarker center={this.props.location} />
//            </LeafletMap>
//        )
//    },
//
//    componentDidMount() {
//        this._map = Leaflet.map(this.getDOMNode(), {
//            view: this.props.view,
//            /**/
//        })
//    }
//})


//
//const position = [51.505, -0.09];
//const map = (
//    <Map center={position} zoom={13}>
//        <TileLayer
//            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//        />
//        <Marker position={position}>
//            <Popup>
//                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
//            </Popup>
//        </Marker>
//    </Map>
//);
//
//render(map, document.getElementById('map-container'));
//
//
//        debugger;
//        let map = L.map('map').setView([51.505, -0.09], 13);
//
//        //http://otile1.mqcdn.com/tiles/1.0.0/map/8/126/87.jpg
//        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//            maxZoom: 18,
//            id: 'davidraleigh.kh7og6i2',
//            accessToken: 'pk.eyJ1IjoiZGF2aWRyYWxlaWdoIiwiYSI6InE0UnFZUGMifQ.lu_PnQlTypNzQ10tBGCkdw'
//        }).addTo(map);
//    },
//
//    componentWillUnmount() {
//        this.map.off('click', this.onMapClick);
//        this.map = null;
//    },
//
//    render: function() {
//        return (
//            <div className='map'></div>
//        );
//    }
//})
//
