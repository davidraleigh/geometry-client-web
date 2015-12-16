/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'

export default React.createClass({


    render() {
        const {operator} = this.props;
        debugger;
        return (
            <div>
                <form className="pure-group">
                    <fieldset className="pure-group">
                        <input type="text" readonly>{operator.operatorType}</input>

                    </fieldset>
                </form>
            </div>
        )
    }
});