/**
 * Created by davidraleigh on 12/10/15.
 */
import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import qs from 'qs'
import xhr from 'xhr'
import sideStyle from './styles/side-menu.css'

//import Layout from './layout'
import IndexPage from './pages/index'

export default Router.extend({

    routes: {
        '': 'index',
        'op/:id': 'operator',
        'operator/:id': 'operator'
    },


    renderPage(page, opts = {layout: true}) {
        //if (opts.layout) {
        //    page = (
        //        <Layout user={app.user}/*now any time user changes, this mixin spec forces a Layout refresh*/>
        //            {page}
        //        </Layout>)
        //}

        ReactDOM.render(page, document.body);
    },


    index() {
        this.renderPage(<IndexPage style={sideStyle} />, {layout:false});
    },

    operator(id) {
        id = id.toLowerCase();
        for (let i = 0; i < app.operators.length; i++) {
            if (id === app.operators.at(i).operatorType.toLowerCase()) {
                app.selectedOperator = app.operators.at(i);
                this.renderPage(<IndexPage style={sideStyle} />, {layout:false});
            }
        }
        // route to index
        index();
    }
});