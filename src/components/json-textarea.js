/**
 * Created by davidraleigh on 1/2/16.
 */
import React from 'react'

export default React.createClass({

    render() {
        const {query, results, showJSONTextarea} = this.props;
        let jsonTextArea = null;
        if (showJSONTextarea) {
            jsonTextArea = (
                <div>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <div style={{"marginRight":"5px"}}>
                            <div style={{"marginBottom":"3px"}}>
                                <label>JSON Request:</label>
                            </div>
                            <textarea className="pure-input-1" type="text" rows="15" value={query} readOnly></textarea>
                        </div>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-2">
                        <div style={{"marginLeft":"5px"}}>
                            <div style={{"marginBottom":"3px"}}>
                                <label>JSON Results:</label>
                            </div>
                            <textarea className="pure-input-1" type="text" rows="15" value={results} readOnly></textarea>
                        </div>
                    </div>
                </div>
            );
        }
        return jsonTextArea;
    }
});