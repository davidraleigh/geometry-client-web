/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import L from './../helpers/leaflet'
import mainStyle from '../styles/main.css'
import LeafletView from './leaflet-view'
import LeafletMap from './leaflet-map'

export default React.createClass({
    render: function() {
        return <LeafletView style={{height: '260px'}}></LeafletView>;
    }
});
