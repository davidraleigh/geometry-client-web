/**
 * Created by davidraleigh on 12/10/15.
 */
import React from 'react';
import NavHelper from '../components/nav-helper'
import LocationMap from '../components/location-map'
import LeafletView from '../components/leaflet-view'


export default React.createClass({
    render() {
        return (
            <NavHelper className='container'>
                <div id="layout">
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
                    <header role='banner'>
                        <h1>Geometry Micro-Service</h1>
                    </header>
                    <p>
                        Demo for the geometry-api-java automated conversion to C#
                    </p>
                    <div>
                        <LocationMap/>
                    </div>
                </div>
            </NavHelper>
        );
    }
});

// Original layout:
//<NavHelper className='container'>
//    <header role='banner'>
//        <h1>Geometry Server</h1>
//    </header>
//    <div>
//        <p>Testing the ESRI C# geometry server</p>
//        <a href='/login' className='button button-large'>
//            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
//        </a>
//    </div>
//    <div>
//        <LocationMap/>
//    </div>
//</NavHelper>