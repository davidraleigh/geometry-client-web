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

export default React.createClass({
    mixins: [ampMixin],

    getInitialState: function() {
        return {
            operators: app.operators,
            selectedOperator: app.selectedOperator,
            query: app.selectedOperator.query
        };
    },

    onSelect(selectedOperator) {
        this.setState({
            selectedOperator: selectedOperator,
            query: selectedOperator.query
        });
        app.selectedOperator = selectedOperator;
    },

    render() {
        return (
            <NavHelper className='container'>
                <div id="layout">
                    <OperatorMenu operators={app.operators} onSelect={this.onSelect}/>
                    <header role='banner'>
                        <h1>Geometry Micro-Service</h1>
                    </header>
                    <p>
                        Demo for the geometry-api-java automated conversion to C#
                    </p>
                    <div>
                        <MethodForm selectedOperator={this.state.selectedOperator} query={this.state.query}/>
                    </div>
                </div>
            </NavHelper>
        );
    }
});