/**
 * Created by davidraleigh on 12/16/15.
 */
import React from 'react'

export default React.createClass({
    onClick(e) {
        e.preventDefault();
        const {onMethodSelect, methodIndex} = this.props;
        onMethodSelect(methodIndex);
    },


    render() {
        const {returnType, active} = this.props;
        const buttonState = active ? "pure-button pure-input-1-3 pure-button-active" : "pure-button pure-input-1-3";

        return (
            <button className={buttonState} onClick={this.onClick}>Return {returnType}</button>
        )
    }
})

//<button className="pure-button pure-input-1-3 pure-button-active" onClick={this.onMethodSelect}>Return {selectedOperator.executeMethods[methodIndex].returnType}</button>
//{selectedOperator.executeMethods.map((method, index) => {
//    <MethodButton returnType={method.returnType}/>
//    //if (index > 0) {
//    //    return (<button className="pure-button pure-input-1-3" onClick={this.onMethodSelect}>Return {method.returnType}</button>)
//    //}
//})}