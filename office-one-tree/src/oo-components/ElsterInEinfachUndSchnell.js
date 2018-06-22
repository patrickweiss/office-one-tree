import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import Help from './Help.js';



class ElsterInEinfachUndSchnell extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Elster in";
    this.verb="einfach und schnell";
    this.path=["ElsterInEinfachUndSchnell"];
  }
  renderMobile(){
    console.log("renderHelp");
    return (
      <div>
      <h1>Elster in <Help text="einfach"></Help> und <Help text="schnell"></Help></h1>
      <h2>Ordner in Google Drive anlegen, um Belege und Umsatzsteuervoranmeldungen gesetzeskonform zu archivieren</h2>
      <h2>Der schnellste und einfachste Prozess, um Belege korrekt zu erfassen</h2>
      <h2>Einmalig Steuerstammdaten eingeben</h2>
      <h2>Umsatzsteuervoranmeldung ans Finanzamt versenden und Antwort archivieren</h2>
    
      </div>
    );
  
  }
}
components.ElsterInEinfachUndSchnell=ElsterInEinfachUndSchnell;

export default ElsterInEinfachUndSchnell;