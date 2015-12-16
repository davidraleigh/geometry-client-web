/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampersandMixin],

    render() {
        const {operator} = this.props;
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