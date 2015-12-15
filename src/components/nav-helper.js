/**
 * Created by davidraleigh on 12/10/15.
 */
import localLinks from 'local-links'
import React from 'react'

export default React.createClass({
    displayName: 'NavHelper',

    onClick(event) {
        const pathname = localLinks.getLocalPathname(event);

        if (pathname) {
            event.preventDefault();

            //event passing with ampersand-app
            //app.trigger('local', {some:'data'});

            app.router.history.navigate(pathname);
        }
    },

    render() {
        return (
            //<div onClick={this.onClick} {...this.props}> // this version makes this internal onClick overiddable
            <div {...this.props} onClick={this.onClick}>
                {this.props.children}
            </div>
        )
    }
});