/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampMixin],

    render() {
        const {operator} = this.props;

        return (
            <li key={operator.id} className="pure-menu-item">
                <a href="/" className="pure-menu-link">{operator.operatorType}</a>
            </li>
        )
    }
})