import React, { Component } from 'react';
import './linkList.scss';
import zhihuIcon from './images/zhihu.ico';
import reactIcon from './images/react.ico';
import es6Icon from './images/es6.ico';
import nodejsIcon from './images/nodejs.ico';
import vuejsIcon from './images/vuejs.png';
import angularIcon from './images/angular.ico';
import mozillaIcon from './images/mozilla.png';
import w3schoolsIcon from './images/w3schools.ico';
import geeksforgeeksIcon from './images/geeksforgeeks.ico';
import githubIcon from './images/github.png';

class LinkList extends Component {
    render() {
        return <ul className="link-list">
            <h3 className="h3">语言类</h3>
            <div className="liWrapper" >
                <li>
                    <img src={es6Icon} alt="es6" />
                    <a href="https://es6.ruanyifeng.com/" target="_Blank" rel="noopener noreferrer">ES6</a>
                </li>
            </div>

            <h3 className="h3">方法类</h3>
            <div className="liWrapper" >
                <li>
                    <img src={reactIcon} alt="react" />
                    <a href="https://reactjs.bootcss.com/" target="_Blank" rel="noopener noreferrer">React</a>
                </li>

                <li>
                    <img src={nodejsIcon} alt="nodejs" />
                    <a href="https://nodejs.org/en/" target="_Blank" rel="noopener noreferrer">Node.js</a>
                </li>
                <li>
                    <img src={vuejsIcon} alt="vuejs" />
                    <a href="https://vuejs.org/" target="_Blank" rel="noopener noreferrer">Vue.js</a>
                </li>
                <li>
                    <img src={angularIcon} alt="angular" />
                    <a href="https://angular.io/" target="_Blank" rel="noopener noreferrer">Angular</a>
                </li>
            </div>
            <h3 className="h3">工具类</h3>
            <div className="liWrapper" >
                <li>
                    <img src={githubIcon} alt="github" />
                    <a href="https://github.com/" target="_Blank">Mozilla</a>
                </li>
            </div>
            <h3 className="h3">文章类</h3>
            <div className="liWrapper" >
            <li>
                <img src={mozillaIcon} alt="mozilla" />
                <a href="https://developer.mozilla.org/zh-CN/" target="_Blank">Mozilla</a>
            </li>
            <li>
                <img src={w3schoolsIcon} alt="w3schools" />
                <a href="https://www.w3schools.com/" target="_Blank">W3Schools</a>
            </li>
            <li>
                <img src={geeksforgeeksIcon} alt="geeksforgeeks" />
                <a href="https://www.geeksforgeeks.org/" target="_Blank">GeeksforGeeks</a>
            </li>
            <li>
                <img src={zhihuIcon} alt="zhihu" />
                <a href="https://www.zhihu.com/" target="_Blank">知乎</a>
            </li>
            </div>
        </ul>
    }
}

export default LinkList;