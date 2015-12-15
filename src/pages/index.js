/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react';
import NavHelper from '../components/nav-helper'
import LocationMap from '../components/location-map'

export default React.createClass({
    render() {
        return (
            <NavHelper className='container'>
                <header role='banner'>
                    <h1>Geometry Server</h1>
                </header>
                <div>
                    <p>Testing the ESRI C# geometry server</p>
                    <a href='/login' className='button button-large'>
                        <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
                    </a>
                </div>
                <div>
                    <LocationMap/>
                </div>
            </NavHelper>
        );
    }
});