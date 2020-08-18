import { Base64 } from 'js-base64';
import React, { Component } from 'react';

import './decode.scss';

class Decode extends Component {
    constructor(props) {
        super(props);
        this.state = { rightValue: "" }
        this.inputRef = React.createRef();
        this.outputRef = React.createRef();
    }
    encodeBase64 = () => {
        let result = Base64.encode(this.inputRef.current.value);
        this.setState({ rightValue: result });
    }
    handleRightValueChange = (event) => {
        this.setState({ rightValue: event.target.value })
    }
    decodeBase64 = () => {
        try {
            let result = Base64.decode(this.inputRef.current.value);
            this.setState({ rightValue: result });
        } catch (e) {
            alert('不是合法的base64值');
        }
    }
    encodeUnicode = () => {
        let result = encodeURI(this.inputRef.current.value);
        this.setState({ rightValue: result });
    }
    decodeUnicode = () => {
        try {
            let result = decodeURI(this.inputRef.current.value);
            this.setState({ rightValue: result });
        } catch (e) {
            alert('不是合法的unicode值');
        }
    }
    encodeURICompoent = () => {
        let result = encodeURIComponent(this.inputRef.current.value);
        this.setState({ rightValue: result });
    }
    decodeURICompoent = () => {
        try {
            let result = decodeURIComponent(this.inputRef.current.value);
            this.setState({ rightValue: result });
        } catch (e) {
            alert('不是合法的URICompoent值');
        }
    }
    render() {
        return (
            <div className="wrapper">
                    <textarea
                        name="input"
                        id="source"
                        cols="80"
                        rows="10"
                        ref={this.inputRef}
                        placeholder="在此输入待加密或者解密的文本">
                    </textarea>
                <div className="buttonList">
                    <button className="encodeButton" onClick={this.encodeBase64}>明文转BASE64</button>
                    <button className="decodeButton" onClick={this.decodeBase64}>BASE64转明文</button>
                    <button className="encodeButton" onClick={this.encodeUnicode}>明文转Unicode</button>
                    <button className="decodeButton" onClick={this.decodeUnicode}>Unicode转明文</button>
                    <button className="encodeButton" onClick={this.encodeURICompoent}>encodeURICompoent</button>
                    <button className="decodeButton" onClick={this.decodeURICompoent}>decodeURICompoent</button>
                </div>
                    <textarea
                        onChange={this.handleRightValueChange}
                        name="output"
                        id="result"
                        cols="80"
                        rows="10"
                        ref={this.outputRef}
                        placeholder="加密或解密的内容会在此显示"
                        value={this.state.rightValue}>
                    </textarea>
                </div>
        )
    }
}

export default Decode;