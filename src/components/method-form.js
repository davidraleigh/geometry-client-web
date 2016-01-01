/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import LeafletView from './leaflet-view'
//import LocationMap from './location-map'
import MethodButton from './method-button'
import MethodTextarea from './method-textarea'
import wktParser from 'wellknown'
import has from 'amp-has'

var WebSocket = require('ws');

export default React.createClass({
    mixins: [ampMixin],

    getInitialState() {
        const {selectedOperator} = this.props;
        return {
            selectedOperator: selectedOperator,
            query: selectedOperator.query(),
            left_geojson_geometries: selectedOperator.method.left_geojson_geometries(),
            right_geojson_geometries: selectedOperator.method.right_geojson_geometries(),
            result_geojson_geometries: {},
            results: ""
        };
    },

    onMethodSelect(index) {
        const {selectedOperator} = this.props;
        selectedOperator.methodIndex = index;
        selectedOperator.set({'methodIndex': index});
        app.selectedOperator = selectedOperator;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
        this.setState({left_geojson_geometries: selectedOperator.method.left_geojson_geometries()});
        this.setState({right_geojson_geometries: selectedOperator.method.right_geojson_geometries()});
    },

    onTextAreaChange(value, index) {
        const {selectedOperator} = this.props;
        selectedOperator.setParameterValue(index, value);
        app.selectedOperator = selectedOperator;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
        this.setState({left_geojson_geometries: selectedOperator.method.left_geojson_geometries()});
        this.setState({right_geojson_geometries: selectedOperator.method.right_geojson_geometries()});
    },

    onSubmit(event) {
        event.preventDefault();
        this.setState({results: "updated"});
        let websocket = new WebSocket('ws://geometry-sockets.azurewebsites.net:80');//'ws://echo.websocket.org');
        websocket.onopen = (evt) => {
            this.setState({results: "Sending Query"});
            websocket.send(this.state.query);
        };

        websocket.onmessage = (evt) => {
            this.setState({results: evt.data});
            app.selectedOperator.method.results = JSON.parse(evt.data);
            if (has(app.selectedOperator.method.results, "geometry_results")) {
                console.log(evt.data);
                debugger;
                let geojsonResults = app.selectedOperator.method.results["geometry_results"].map(function(value) {
                    return wktParser(value);
                });
                this.setState({result_geojson_geometries: geojsonResults});
                console.log("geometry_results exists");
            }

            websocket.close();
        };
        websocket.onclose = (evt) => {
            console.log("disconnected");
            //this.setState({results:"DISCONNECTED"});
        };
        websocket.onerror = (evt) => {
            this.setState({results: "Failed to submit. Error: " + evt.data});
        };
    },

    componentWillReceiveProps(nextProps) {
        const {selectedOperator} = nextProps;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
        this.setState({left_geojson_geometries: selectedOperator.method.left_geojson_geometries()});
        this.setState({right_geojson_geometries: selectedOperator.method.right_geojson_geometries()});
    },

    render() {
        const {selectedOperator} = this.props;
        return (
            <div>
                 <div className="pure-g">
                     <div className="pure-u-1-2">
                         <LeafletView left_geojson_geometries={this.state.left_geojson_geometries} right_geojson_geometries={this.state.right_geojson_geometries}/>
                     </div>
                     <div className="pure-u-1-2">
                         <LeafletView result_geojson_geometries={this.state.result_geojson_geometries}/>
                     </div>
                </div>
                <form className="pure-form">
                    <fieldset className="pure-group">
                        <a style={{"fontSize": "x-large"}}>{selectedOperator.operatorType}</a>
                        <div className="pure-input">
                            {selectedOperator.executeMethods.map((method, index) => {
                                return <MethodButton key={index} returnType={method.returnType} methodIndex={index} active={(selectedOperator.methodIndex === index)} onMethodSelect={this.onMethodSelect}/>
                            })}
                            {selectedOperator.method.parameters.map((parameter) => {
                                return <MethodTextarea key={'' + parameter.parameterPosition + selectedOperator.operatorType + selectedOperator.methodIndex} parameter={parameter} onTextAreaChange={this.onTextAreaChange} />
                            })}
                        </div>
                        <button className="pure-button pure-input-1-3 pure-button-primary" onClick={this.onSubmit}>Submit Query</button>
                        <div className="pure-group">
                            <div className="pure-u-1-2">
                                <label>JSON Query:</label>
                                <textarea className="pure-input-1" type="text" rows="8" value={this.state.query} readOnly></textarea>
                            </div>

                            <div className="pure-u-1-2">
                                <label>Results:</label>
                                <textarea className="pure-input-1" type="text" rows="8" value={this.state.results} readOnly></textarea>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
});

