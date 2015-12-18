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
        debugger;
        const {onTextAreaChange} = this.props;
        this.setState({value: event.target.value});
        onTextAreaChange(event.target.value, this.state.position);
    },

    render() {
        const {parameter} = this.props;
        const value = this.state.value;
        return (
            <div>
                <label>{parameter.parameterType}: {parameter.parameterName}</label>
                <textarea className="pure-input-1" value={value} onChange={this.onChange} />
            </div>
        )
    }
});