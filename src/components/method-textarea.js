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
        return (
            <div>
                <div style={{"margin-bottom":"3px", "margin-top":"2px"}}>
                    <label>{parameter.parameterType}: {parameter.parameterName}</label>
                </div>
                <textarea className="pure-input-1" value={value} onChange={this.onChange} />
            </div>
        )
    }
});