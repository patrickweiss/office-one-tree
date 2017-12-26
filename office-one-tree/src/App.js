import React, { Component } from 'react';
import './App.css';
import {components} from './oo-components/OfficeLeaf.js';
import './oo-components/ObRoot.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.store=props.store;
  }
  render() {
    console.log("App store");
    console.log(this.store);
    var CurrentLeaf = components[this.store.getState().UI.leaf];
    return <CurrentLeaf size="MOBILE" store={this.store}/>;
  }
}

export default App;
