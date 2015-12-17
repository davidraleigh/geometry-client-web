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
        return {
            methodIndex: 0
        };
    },

    onMethodSelect(index) {
        debugger;
        this.props.request.methodIndex = index;
        this.setState({methodIndex: index});
    },

    onTextAreaChange(value, index) {
        console.log(value);
        console.log(index);
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
