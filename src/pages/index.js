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
                    <a href="#menu"  id="menuLink" className="menu-link" >
                        <span></span>
                    </a>
                    <OperatorMenu id="menu" operators={app.operators} onSelect={this.onSelect}/>
                    <header role='banner'>
                        <h1>Geometry Micro-Service Demo</h1>
                    </header>
                    <p>
                        Demonstration of the C# computational geometry library that is a continuously integrated port of ESRI's geometry-api-java library
                    </p>
                    <div>
                        <MethodForm selectedOperator={this.state.selectedOperator} query={this.state.query}/>
                    </div>
                </div>
            </NavHelper>
        );
    }
});
