/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import OperatorItem from './operator-item'

export default React.createClass({
    mixins: [ampersandMixin],

    onClick() {

    },


    render() {
        const {operators} = this.props;
        return (
            <div id="menu">
                <a className="pure-menu-heading" href="#">Operators</a>
                <ul className="pure-menu-list">
                    {
                        operators.map((operator) => <OperatorItem operator={operator}></OperatorItem>)
                    }
                </ul>
            </div>
        )
    }
})