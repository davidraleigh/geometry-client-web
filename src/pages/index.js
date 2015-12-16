/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react';
import app from 'ampersand-app'

import NavHelper from '../components/nav-helper'
import LocationMap from '../components/location-map'
import LeafletView from '../components/leaflet-view'
import OperatorMenu from '../components/operator-menu'
import OperatorForm from '../components/operator-form'


export default React.createClass({
    render() {
        return (
            <NavHelper className='container'>
                <div id="layout">
                    <OperatorMenu operators={app.operators} />
                    <header role='banner'>
                        <h1>Geometry Micro-Service</h1>
                    </header>
                    <p>
                        Demo for the geometry-api-java automated conversion to C#
                    </p>
                    <div>
                        <LocationMap/>
                    </div>
                    <div>
                        <OperatorForm operator={app.operators.at(0)}/>
                    </div>
                </div>
            </NavHelper>
        );
    }
});