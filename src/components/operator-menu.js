/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import OperatorItem from './operator-item'

export default React.createClass({
    mixins: [ampMixin],

    render() {
        const {operators, onSelect, menuToggled} = this.props;
        return (
            <div id="menu" className={menuToggled ? "active" : ""}>
                <a className="pure-menu-heading" href="#">Operators</a>
                <ul className="pure-menu-list">
                    {
                        operators.map((operator) => <OperatorItem key={operator.operatorType} operator={operator} onSelect={onSelect}></OperatorItem>)
                    }
                </ul>
            </div>
        )
    }
})