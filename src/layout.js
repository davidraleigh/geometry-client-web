/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'
import NavHelper from './components/nav-helper'
import Map from './components/location-map'

export default React.createClass({
    mixins: [ampMixin],

    displayName: "Layout",

    render() {
        return (
            <NavHelper className="test">
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        <li className='pull-right'><a href='/logout'>Logout</a> Garbage/*{user.login}*/</li>
                    </ul>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>
            </NavHelper>
        )
    }
})