import React, { Component } from 'react';
import './index.css';
import {components} from './oo-components/OfficeLeaf.js';
import './oo-components/BelegeAuswerten.js';
import './oo-components/BelegeErstellenErfassenBuchen.js';
import './oo-components/OfficeOne2018.js';
import './oo-components/OrdnerEinrichten.js';
import './oo-components/ElsterInEinfachUndSchnell.js';
import './oo-components/OfficeOneTeam.js';
import './oo-components/LeafTemplate.js';





class App extends Component {
  render() {
  	window.logger.debug("2. App.render--------------------------------------------");
    var CurrentLeaf = components[window.store.getState().UI.leaf];
    return <CurrentLeaf size="MOBILE"/>;
  }
}

export default App;
