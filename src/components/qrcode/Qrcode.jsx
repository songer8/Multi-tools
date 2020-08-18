import * as qrGenerator from 'qrcode';

import React, { Component } from 'react';
import './qrcode.scss';

class Qrcode extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.inputRef = React.createRef();
        this.state = { isQrGenerated: false }
    }

    genQrcode = () => {
        if(!this.inputRef.current.value) {
            return;
        }
        qrGenerator.toCanvas(this.canvasRef.current, this.inputRef.current.value)
        this.setState({ isQrGenerated: true })
    }

    render() {
        return <div className="qrcode">
            <div className="inputWrapper">
                <input className="input" type="text" ref={this.inputRef} placeholder="http://" />
                <button className="clickQrBtn" onClick={this.genQrcode}>生成二维码</button>
            </div>
            <div className="output">
                <canvas className="outputQr" ref={this.canvasRef}>QRCode</canvas>
                {!this.state.isQrGenerated &&
                    <span className="create-code-tip">此处生成二维码</span>
                }
            </div>

        </div>;
    }
}

export default Qrcode;