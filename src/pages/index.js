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
            query: app.selectedOperator.query,
            menuToggled: false
        };
    },

    onSelect(selectedOperator) {
        this.setState({
            selectedOperator: selectedOperator,
            query: selectedOperator.query
        });
        app.selectedOperator = selectedOperator;
    },

    onClick() {
        console.log("menu hamburger clicked");
        this.setState({menuToggled: !this.state.menuToggled});
    },

    render() {
        return (
            <NavHelper className='container'>
                <div id="layout" className={this.state.menuToggled ? "active" : ""}>
                    <a id="menuLink" className={this.state.menuToggled ? "menu-link active" : "menu-link"} onClick={this.onClick}>
                        <span style={{"font-size":"13pt"}}>MENU</span>
                    </a>
                    <OperatorMenu id="menu" menuToggled={this.state.menuToggled} operators={app.operators} onSelect={this.onSelect}/>
                    <header role='banner'>
                        <h1>Geometry Micro-Service Demo</h1>
                    </header>
                    <p>
                        This page uses a C# geometry library that is a continuously integrated port of ESRI's <a target="_blank" href="https://github.com/Esri/geometry-api-java">geometry-api-java</a> library.
                        Documentation about how the operators work can be found on ESRI's <a target="_blank" href="https://github.com/Esri/geometry-api-java/wiki">geometry wiki page</a>. Find a description of this project at <a target="_blank" href="http://davidraleigh.io/geometry-micro-service/">http://davidraleigh.io</a>
                    </p>
                    <div>
                        <MethodForm selectedOperator={this.state.selectedOperator} query={this.state.query}/>
                    </div>
                </div>
            </NavHelper>
        );
    }
});
