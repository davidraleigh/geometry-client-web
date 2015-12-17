/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import OperatorItem from './operator-item'

export default React.createClass({
    mixins: [ampMixin],

    render() {
        const {operators, selectOperator} = this.props;
        return (
            <div id="menu">
                <a className="pure-menu-heading" href="#">Operators</a>
                <ul className="pure-menu-list">
                    {
                        operators.map((operator) => <OperatorItem key={operator.operatorType} operator={operator} selectOperator={selectOperator}></OperatorItem>)
                    }
                </ul>
            </div>
        )
    }
})