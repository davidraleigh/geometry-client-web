/**
 * Created by davidraleigh on 12/15/15.
 */
import React from 'react'


export default React.createClass({
    render() {
        return (
            <div {...this.props} style={{height: '260px'}}>
                {this.props.view}
            </div>
        );
    }
})