import React, { Component } from 'react';
import MD5 from './js-sdk/md5';
import fetchJsonp from 'fetch-jsonp'

import "./dictionary.scss";

class Dictionary extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.dicInputRef = React.createRef();
        this.state = { result: '' }
    }

    genTranslate = () => {
        var query = this.dicInputRef.current.value;
        var from = 'zh';
        var to = 'en';

        var english = new RegExp("[A-Za-z]+");
        if (english.test(query)) {
            from = 'en';
            to = 'zh';
        }

        var appid = '20200709000516150';
        var key = 'n3Ts5qaI2yDcgZTbvXsV';
        var salt = (new Date).getTime();
        // var query = this.dicInputRef.current.value;
        // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'

        var str1 = appid + query + salt + key;
        var sign = MD5(str1)

        fetchJsonp(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${query}&appid=${appid}&salt=${salt}&from=${from}&to=${to}&sign=${sign}`)
            .then(function (response) {
                return response.json()
            }).then((json) => {
                console.log(json);
                let result = json.trans_result[0].dst;
                this.setState({ result: result });
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

    render() {
        return <div className="translate">
            <div className="dic-wrapper">
                <input type="text" className="dicInput" ref={this.dicInputRef} placeholder="在此输入要翻译的单词或者文字" />
                <button className="clickDicBtn" onClick={this.genTranslate} >翻译</button>
            </div>
            <div className="dicOutput">
                {this.state.result}
            </div>
        </div>;
    }
}

export default Dictionary;