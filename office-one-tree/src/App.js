import React, { Component } from 'react';
import './App.css';
import {components} from './oo-components/OfficeLeaf.js';
import './oo-components/ObRoot.js';
import './oo-components/BelegeAuswerten.js';
import './oo-components/BelegeErfassen.js';



class App extends Component {
  render() {
    var CurrentLeaf = components[window.store.getState().UI.leaf];
    return <CurrentLeaf size="MOBILE"/>;
  }
}

export default App;
