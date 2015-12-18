/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'
import app from 'ampersand-app'
import Operator from '../models/operator'

export default React.createClass({
    mixins: [ampMixin],

    onClick() {
        const {onSelect} = this.props;
        onSelect(this.props.operator);
    },

    render() {
        const {operator} = this.props;

        return (
            <li className="pure-menu-item">
                <a onClick={this.onClick} href="/" className="pure-menu-link">{operator.operatorType}</a>
            </li>
        )
    }
})