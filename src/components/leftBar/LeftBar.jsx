import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import "./leftBar.scss";


class LeftBar extends Component {
    constructor(props) {
        super(props)
        this.state = { active: '' }
    }
    componentDidMount() {
        // this.setState({ active: window.location.hash.replace('#', '') })
        const { pathname } = this.props.location;
        this.setState({ active: pathname })
    }

    handleNavClick = (path) => {
        this.setState({ active: path });
        // this.props.history.push('/qrcode');
        this.props.history.push(path);

    }
    render() {
        return (
            <Router>
                <ul className="leftBar">
                    <li className={`nav ${this.state.active == "/linklist" ? 'active' : 'passive'}`} onClick={() => this.handleNavClick("/linklist")}>
                        <span className="iconfont icon-navmore child"></span>&nbsp;
                        <span className="liName child">任意门</span>
                        {/* <Link to="/linklist">任意门</Link> */}
                    </li>
                    <li className={`nav ${this.state.active == "/qrcode" ? 'active' : 'passive'}`} onClick={this.handleNavClick.bind(this, "/qrcode")}>
                        <span className="iconfont icon-qrcode child"></span>&nbsp;
                        <span className="liName child">二维码</span>
                        {/* <Link to="/qrcode">二维码</Link> */}
                    </li>
                    <li className={`nav ${this.state.active == "/decode" ? 'active' : 'passive'}`} onClick={this.handleNavClick.bind(this, "/decode")}>
                        <span className="iconfont icon-code child"></span>&nbsp;
                        <span className="liName child">编解码</span>
                        {/* <Link to="/decode">编解码</Link> */}
                    </li>
                    <li className={`nav ${this.state.active == "/hotIssue" ? 'active' : 'passive'}`} onClick={this.handleNavClick.bind(this, "/hotIssue")}>
                        <span className="iconfont icon-article child"></span>&nbsp;
                        <span className="liName child">热门文章</span>
                        {/* <Link to="/hotIssue">热门文章</Link> */}
                    </li>
                    <li className={`nav ${this.state.active == "/dictionary" ? 'active' : 'passive'}`} onClick={this.handleNavClick.bind(this, "/dictionary")}>
                        <span className="iconfont icon-dictionary child"></span>&nbsp;
                        <span className="liName child">字典</span>
                    </li>
                </ul>
            </Router>
        )
    }
}

export default withRouter(LeftBar);