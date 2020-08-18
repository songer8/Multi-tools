import React, { Component } from 'react';
// import qrcode from "qrcode";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

import LinkList from './components/linkList/LinkList';
import Qrcode from './components/qrcode/Qrcode';
import Decode from './components/decode/Decode';
import LeftBar from './components/leftBar/LeftBar';
import Dictionary from './components/dictionary/Dictionary';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.canvasRef = React.createRef();
  //   this.inputRef = React.createRef();
  // }

  // genQrcode = () => {
  //   qrcode.toCanvas(this.canvasRef.current, this.inputRef.current.value)
  // }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="nav">
            <LeftBar />
          </div>
          <div className="content">
            <Switch>
              <Route path="/linklist">
                <LinkList />
              </Route>
              <Route path="/qrcode">
                <Qrcode />
              </Route>
              <Route path="/decode">
                <Decode />
              </Route>
              <Route path="/hotIssue">
                <Decode />
              </Route>
              <Route path="/dictionary">
                <Dictionary />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
