/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react';
import app from 'ampersand-app'
import ampMixin from 'ampersand-react-mixin'

import NavHelper from '../components/nav-helper'
import LocationMap from '../components/location-map'
import LeafletView from '../components/leaflet-view'
import OperatorMenu from '../components/operator-menu'
import MethodForm from '../components/method-form'
import Request from '../models/request'

export default React.createClass({
    mixins: [ampMixin],

    getInitialState: function() {
        return {
            operators: app.operators,
            request: app.request
        };
    },

    selectOperator(selectedOperator) {
        const request = new Request({operator:selectedOperator, methodIndex: 0, jsonQuery: ''});
        this.setState({
            request: request
        });
        app.request = request;
    },

    render() {
        return (
            <NavHelper className='container'>
                <div id="layout">
                    <OperatorMenu operators={app.operators} selectOperator={this.selectOperator}/>
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
                        <MethodForm request={this.state.request}/>
                    </div>
                </div>
            </NavHelper>
        );
    }
});