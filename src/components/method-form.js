/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import MethodButton from './method-button'
import MethodTextarea from './method-textarea'

export default React.createClass({
    mixins: [ampMixin],

    getInitialState() {
        const {request} = this.props;
        return { methodIndex: 0, query: request.query()};
    },

    onMethodSelect(index) {
        const {request} = this.props;
        request.methodIndex = index;
        app.request = request;
        this.setState({methodIndex: index});
        this.setState({query: request.query()});
    },

    onTextAreaChange(value, index) {
        const {request} = this.props;
        request.setParameterValue(index, value);
        app.request = request;
        this.setState({query: request.query()});
    },

    onSubmit() {

    },

    componentWillReceiveProps(nextProps) {
        const {query} = nextProps;
        this.setState({query: query});
    },

    render() {
        const {request} = this.props;
        const methodIndex = request.methodIndex;
        return (
            <div>
                <form className="pure-form">
                    <fieldset className="pure-group">
                        <a style={{"fontSize": "x-large"}}>{request.operator.operatorType}</a>
                        <div className="pure-input">
                            {request.operator.executeMethods.map((method, index) => {
                                return <MethodButton key={index} returnType={method.returnType} methodIndex={index} active={(methodIndex === index)} onMethodSelect={this.onMethodSelect}/>
                            })}
                            {request.operator.executeMethods[methodIndex].parameters.map((parameter) => {
                                return <MethodTextarea key={'' + parameter.parameterPosition + request.operator.operatorType + methodIndex} parameter={parameter} textAreaChange={this.onTextAreaChange} />
                            })}
                        </div>
                        <button className="pure-button pure-input-1-3 pure-button-primary" onClick={this.onSubmit}>Submit Query</button>
                        <textarea className="pure-input-1" type="text" value={this.state.query} readOnly></textarea>
                    </fieldset>
                </form>
            </div>
        )
    }
});
//button(type="submit" class="pure-button pure-input-1-2 pure-button-primary" data-bind="click: $root.submitQuery")
//| Submit Query
//textarea(type="text" class="pure-input-1-2" data-bind="value: queryText" readonly)
