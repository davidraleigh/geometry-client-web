/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import LeafletView from './leaflet-view'
import MethodButton from './method-button'
import MethodTextarea from './method-textarea'
import JSONTextarea from './json-textarea'
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
            results: "",
            showJSONTextarea: false,
            jsonButtonText: "Show JSON"
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
        this.setState({result_geojson_geometries: null});
        this.setState({results: ""});
    },

    onTextAreaChange(value, index) {
        const {selectedOperator} = this.props;
        selectedOperator.setParameterValue(index, value);
        app.selectedOperator = selectedOperator;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
        this.setState({left_geojson_geometries: selectedOperator.method.left_geojson_geometries()});
        this.setState({right_geojson_geometries: selectedOperator.method.right_geojson_geometries()});
        this.setState({result_geojson_geometries: null});
        this.setState({results: ""});
    },

    onSubmit(event) {
        event.preventDefault();
        this.setState({results: "submitting request"});
        let websocket = new WebSocket('ws://geometry.fogmodel.io:80');//'ws://echo.websocket.org');
        websocket.onopen = (evt) => {
            this.setState({results: "Sending Query"});
            websocket.send(this.state.query);
        };

        websocket.onmessage = (evt) => {
            this.setState({results: evt.data});
            app.selectedOperator.method.results = JSON.parse(evt.data);
            if (has(app.selectedOperator.method.results, "geometry_results")) {
                let geojsonResults = app.selectedOperator.method.results["geometry_results"].map(function(value) {
                    return wktParser(value);
                });
                this.setState({result_geojson_geometries: geojsonResults});
            } else {
                // toggle the JSON visibility so the user can see results
                if (this.state.showJSONTextarea === false) {
                    this.setState({jsonButtonText: "Hide JSON"});
                    this.setState({showJSONTextarea: !this.state.showJSONTextarea});
                }

            }

            websocket.close();
        };
        websocket.onclose = (evt) => {
            console.log("disconnected");
        };
        websocket.onerror = (evt) => {
            this.setState({results: "Failed to submit. Error: " + evt.data});
        };
    },

    onToggleJSON(event) {
        event.preventDefault();
        this.setState({showJSONTextarea: !this.state.showJSONTextarea});
        if (this.state.jsonButtonText === "Hide JSON")
            this.setState({jsonButtonText: "Show JSON"});
        else
            this.setState({jsonButtonText: "Hide JSON"});
    },

    componentWillReceiveProps(nextProps) {
        const {selectedOperator} = nextProps;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
        this.setState({left_geojson_geometries: selectedOperator.method.left_geojson_geometries()});
        this.setState({right_geojson_geometries: selectedOperator.method.right_geojson_geometries()});
        this.setState({result_geojson_geometries: null});
        this.setState({results: ""});
    },

    render() {
        const {selectedOperator} = this.props;
        let outputView = null;
        if (selectedOperator.executeMethods.at(0).returnType ==="Geometries" ||
            selectedOperator.executeMethods.at(0).returnType ==="Geometry") {
            outputView = (
                <div>
                    <span style={{"fontSize": "x-large", "marginLeft": "20px"}}>Results:</span>
                    <div style={{"marginLeft": "20px"}}>
                        <LeafletView result_geojson_geometries={this.state.result_geojson_geometries}/>
                    </div>
                </div>
            )
        }

        let outputTypeText = null;
        if (selectedOperator.executeMethods.length > 1) {
            outputTypeText = (
                <div style={{"marginTop":"10px"}}>
                    <label>Output Types: </label>
                </div>
            )
        }

        return (
            <div className="pure-group">
                <div className="pure-u-1 pure-u-lg-1-3">
                    <form className="pure-form">
                        <fieldset className="pure-group">
                            <a style={{"fontSize": "x-large"}}>{selectedOperator.operatorType} Operator</a>
                            {outputTypeText}
                            <div className="pure-input">
                                {selectedOperator.executeMethods.map((method, index) => {
                                    if (selectedOperator.executeMethods.length > 1)
                                        return <MethodButton key={index} returnType={method.returnType} methodIndex={index} active={(selectedOperator.methodIndex === index)} onMethodSelect={this.onMethodSelect}/>
                                })}
                                {selectedOperator.method.parameters.map((parameter) => {
                                    if (parameter.parameterType != "ProgressTracker")
                                        return <MethodTextarea key={'' + parameter.parameterPosition + selectedOperator.operatorType + selectedOperator.methodIndex} parameter={parameter} onTextAreaChange={this.onTextAreaChange} />
                                })}
                            </div>
                            <button className="pure-button pure-input-1-2 pure-button-primary" onClick={this.onSubmit}>Submit Query</button>
                            <button className="pure-button pure-input-1-2" onClick={this.onToggleJSON}>{this.state.jsonButtonText}</button>
                            <div className="pure-group">
                                <JSONTextarea query={this.state.query} results={this.state.results} showJSONTextarea={this.state.showJSONTextarea}></JSONTextarea>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3">
                    {outputView}
                    <span style={{"fontSize": "x-large", "marginLeft": "20px"}}>Inputs:</span>
                    <div style={{"marginLeft": "20px"}}>
                        <LeafletView left_geojson_geometries={this.state.left_geojson_geometries} right_geojson_geometries={this.state.right_geojson_geometries}/>
                    </div>
                </div>
            </div>
        )
    }
});

