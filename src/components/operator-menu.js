/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'

export default React.createClass({
    render() {
        return (
            <div id="menu">
                <a className="pure-menu-heading" href="#">Operators</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <a href="/" className="pure-menu-link">PlaceHolder 1</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/" className="pure-menu-link">PlaceHolder 2</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/" className="pure-menu-link">PlaceHolder 3</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/" className="pure-menu-link">PlaceHolder 4</a>
                    </li>
                </ul>
            </div>
        )
    }
})