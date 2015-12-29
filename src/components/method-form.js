/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import LeafletView from './leaflet-view'
//import LocationMap from './location-map'
import MethodButton from './method-button'
import MethodTextarea from './method-textarea'

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
            result_geometries: "test"
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
        this.setState({result_geometries: "updated"});
        let websocket = new WebSocket('ws://localhost:8080');//'ws://echo.websocket.org');
        websocket.onopen = (evt) => {
            this.setState({result_geometries: "Sending Query"});
            websocket.send(this.state.query);
        };
        debugger;
        websocket.onmessage = (evt) => {
            debugger;
            this.setState({result_geometries: evt.data});
            websocket.close();
        };
        websocket.onclose = (evt) => {
            console.log("disconnected");
            //this.setState({result_geometries:"DISCONNECTED"});
        };
        websocket.onerror = (evt) => {
            this.setState({result_geometries: "Failed to submit. Error: " + evt.data});
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
                         <LeafletView left_geojson_geometries={this.state.left_geojson_geometries} right_geojson_geometries={this.state.right_geojson_geometries} resultGeometries={this.state.result_geometries}/>
                     </div>
                     <div className="pure-u-1-2">
                         <LeafletView left_geojson_geometries={this.state.left_geojson_geometries} right_geojson_geometries={this.state.right_geojson_geometries} resultGeometries={this.state.result_geometries}/>
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
                                <textarea className="pure-input-1" type="text" rows="8" value={this.state.result_geometries} readOnly></textarea>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
});

