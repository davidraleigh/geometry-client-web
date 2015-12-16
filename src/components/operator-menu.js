/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'

export default React.createClass({
    render() {
        const {operators} = this.props;
        return (
            <div id="menu">
                <a className="pure-menu-heading" href="#">Operators</a>
                <ul className="pure-menu-list">
                    {
                        operators.map((operator) => {
                                return (
                                    <li className="pure-menu-item">
                                        <a href="/" className="pure-menu-link">{operator.operatorType}</a>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
})