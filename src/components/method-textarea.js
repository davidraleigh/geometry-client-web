/**
 * Created by davidraleigh on 12/17/15.
 */
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampersandMixin],

    getInitialState() {
        const {parameter} = this.props;
        return {value: parameter.parameterValue, position: parameter.parameterPosition};
    },

    onChange(event) {
        const {onTextAreaChange} = this.props;
        this.setState({value: event.target.value});
        onTextAreaChange(event.target.value, this.state.position);
    },

    render() {
        const {parameter} = this.props;
        const value = this.state.value;
        let titleText = null;
        let rowSize = 2;
        if (parameter.parameterType === "Geometry" ||
            parameter.parameterType === "GeometryCursor" ||
            parameter.parameterType === "Polyline" ||
            parameter.parameterType === "Envelope2D") {
            rowSize = 5;
            titleText = "Well-known text geometry inputs"
        } else if (parameter.parameterType === "SpatialReference") {
            titleText = "Well-known id number"
        }

        return (
            <div>
                <div style={{"marginBottom":"3px", "marginTop":"2px"}}>
                    <label>{parameter.parameterType}: {parameter.parameterName}</label>
                </div>
                <textarea title={titleText} className="pure-input-1" rows={rowSize} value={value} onChange={this.onChange} />
            </div>
        )
    }
});