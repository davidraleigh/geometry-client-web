/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import LeafletView from './leaflet-view'
//import LocationMap from './location-map'
import MethodButton from './method-button'
import MethodTextarea from './method-textarea'

export default React.createClass({
    mixins: [ampMixin],

    getInitialState() {
        const {selectedOperator} = this.props;
        return {
            selectedOperator: selectedOperator,
            query: selectedOperator.query(),
            left_geojson_geometries: "",
            right_geojson_geometries: "",
            result_geometries: ""
        };
    },

    onMethodSelect(index) {
        const {selectedOperator} = this.props;
        selectedOperator.methodIndex = index;
        selectedOperator.set({'methodIndex': index});
        app.selectedOperator = selectedOperator;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
        //var parameters = request.operator[request.methodIndex].parameters;
    },

    onTextAreaChange(value, index) {
        const {selectedOperator} = this.props;
        selectedOperator.setParameterValue(index, value);
        app.selectedOperator = selectedOperator;
        this.setState({selectedOperator: selectedOperator});
        this.setState({query: selectedOperator.query()});
    },

    onSubmit(event) {
        event.preventDefault();
    },

    componentWillReceiveProps(nextProps) {
        const {selectedOperator} = nextProps;
        debugger;
        this.setState({query: selectedOperator.query()});
    },

    render() {
        const {selectedOperator} = this.props;
        return (
            <div>
                <div>
                    <LeafletView leftGeoemtries={this.state.left_wkt_geometries} rightGeometries={this.state.right_wkt_geometries} resultGeometries={this.state.result_geometries}/>
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
                                <textarea className="pure-input-1" type="text" rows="8" value={this.state.selectedOperator.results} readOnly></textarea>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
});

