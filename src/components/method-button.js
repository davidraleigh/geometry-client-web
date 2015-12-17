/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampersandMixin],

    onClick(e) {
        e.preventDefault();
        const {onMethodSelect, methodIndex} = this.props;
        onMethodSelect(methodIndex);
    },


    render() {
        const {returnType, active} = this.props;
        const buttonState = active ? "pure-button pure-input-1-3 pure-button-active" : "pure-button pure-input-1-3";

        return (
            <button className={buttonState} onClick={this.onClick}>Return {returnType}</button>
        )
    }
});