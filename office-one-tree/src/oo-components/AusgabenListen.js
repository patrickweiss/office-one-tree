import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';
import {serverAufrufen} from './serverActions.js';
 

class AusgabenListen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Ausgaben";
    this.verb = "listen";
    this.path = ["ObRoot", "AusgabenBelegeErstellenErfassenBuchen", "AusgabenListen"];
  }
  renderListItem() {
    var ausgabenListeHTML=[];
    if (window.store.getState().BM.ooAusgaben) {
      window.logger.debug("3. AusgabenListen.contructor: Ausgaben geladen");

      var ooAusgaben = window.tableFilter(window.store.getState().BM.ooAusgaben,"Datum",window.store.getState().UI.buchungsperiode, 3);
      for (var index in ooAusgaben) {
        ausgabenListeHTML.push(<li key={index}>{ooAusgaben[index][1]} </li>);
      }
    }
    else {
      window.logger.debug("3. AusgabenListen.contructor: keine Ausgaben geladen");
      ausgabenListeHTML.push(<li key="1">Ausgaben werden aus Google Drive geladen. </li>);
    }
    window.logger.debug("2. AusgabenListen.renderListItem--------------------------------------------");
    
    
    return (
      <div className="LIST_ITEM" >
        <p>Ausgabenliste {window.store.getState().UI.buchungsperiode}</p>
        <ul>
          {ausgabenListeHTML}
        </ul>
        <button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button>
    </div>
    );
  }
  
  renderMobile(){
        var ausgabenListeHTML=[];
    if (window.store.getState().BM.ooAusgaben) {
      window.logger.debug("3. AusgabenListen.contructor: Ausgaben geladen");

      var ooAusgaben = window.tableFilter(window.store.getState().BM.ooAusgaben,"Datum",window.store.getState().UI.buchungsperiode, 100);
      for (var index in ooAusgaben) {
        ausgabenListeHTML.push(<li key={index}>{ooAusgaben[index][1]} </li>);
      }
    }
    else {
      window.logger.debug("3. AusgabenListen.contructor: keine Ausgaben geladen");
      ausgabenListeHTML.push(<li key="1">Ausgaben werden aus Google Drive geladen. </li>);
    }
    window.logger.debug("2. AusgabenListen.renderListItem--------------------------------------------");
    
    
    return (
      <div className="LIST_ITEM" >
        <p>Ausgabenliste {window.store.getState().UI.buchungsperiode}</p>
        <ul>
          {ausgabenListeHTML}
        </ul>
    </div>
    );
    
  }
  
  
  
  componentDidMount() {
    if (!window.store.getState().BM.ooAusgaben&&window.store.getState().UI.loggedIn) {
      window.store.dispatch(
        serverAufrufen(
          {
            functionName:"getNamedRangeData",
            parametersArray:[window.store.getState().BM.serverState.ooAusgaben.spreadsheetId, "AusgabenD"]
          })
      );
      //window.callScriptFunction("getNamedRangeData", [window.store.getState().BM.serverState.ooAusgaben.spreadsheetId, "AusgabenD"]);
    }
  }
  }
  components.AusgabenListen = AusgabenListen;

export default AusgabenListen;