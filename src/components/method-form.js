/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'
import ampMixin from 'ampersand-react-mixin'

import MethodButton from './method-button'

export default React.createClass({
    mixins: [ampMixin],

    getInitialState() {
        return {
            methodIndex: 0
        };
    },

    onMethodSelect(index) {
        debugger;
        this.props.request.methodIndex = index;
        this.setState({methodIndex: index});
    },

    render() {
        debugger;
        const {request} = this.props;

        return (
            <div>
                <a>{request.operator.operatorType}</a>
                <form className="pure-form">
                    <fieldset className="pure-group">
                        <div className="pure-input">
                            {request.operator.executeMethods.map((method, index) => {
                                return <MethodButton returnType={method.returnType} methodIndex={index} active={(this.state.methodIndex === index)} onMethodSelect={this.onMethodSelect}/>
                            })}
                            {request.operator.executeMethods[this.state.methodIndex].parameters.map((param) => {
                                return (
                                    <div>
                                        <label>{param.parameterType}: {param.parameterName}</label>
                                        <textarea className="pure-input-1"></textarea>
                                    </div>
                                )
                            })}
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
});

//label(data-bind="attr:{id: parameterPosition}, text: parameterType")
//textarea(type="text" class="pure-input-1-2" data-bind="textInput: $parent.parameters()[$index()].value, attr:{placeholder: parameterName, id: parameterPosition}")
//button(type="submit" class="pure-button pure-input-1-2 pure-button-primary" data-bind="click: $root.submitQuery")
//| Submit Query
//textarea(type="text" class="pure-input-1-2" data-bind="value: queryText" readonly)
