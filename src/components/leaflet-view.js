/**
 * Created by davidraleigh on 12/15/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import L from '../helpers/leaflet'

export default React.createClass({
    render() {
        return <div className='map' ref='mapClass' style={{height: '260px'}}></div>
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
    }
})