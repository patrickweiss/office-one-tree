import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class BuchungsperiodeWaehlen extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.charactericon = this.charactericon;

    newProps.subject= "Buchungsperiode";
    newProps.verb="wählen";
    newProps.path="OfficeOneTeam,BuchungsperiodeWaehlen";
 
    if (window.store.getState().UI.buchungsperiode){
      newProps.subject=window.store.getState().UI.buchungsperiode.split(" ")[1];
      newProps.verb=" ";
      newProps.charactericon=window.store.getState().UI.buchungsperiode.split(" ")[0];
    }

    super.initialize(newProps);
  }
  
   renderListItem(){
     return this.renderMobile();
   }

  renderMobile(){
    window.logger.debug("2. BuchungsperiodeWaehlen.renderMobile--------------------------------------------");

    return (
        <table>
        <tbody>
     
        <tr>
          <td><button className="td-left" type="button" onClick={this.handleClick}> <div className="months"><span className="month-num">01</span> Januar</div></button></td>
          <td><button type="button" className="td-right" onClick={this.handleClick}> <div className="months"><span className="month-num">07</span> Juli</div></button></td>
        </tr>
        <tr>
          <td><button type="button" className="td-left" onClick={this.handleClick}><div className="months"><span className="month-num">02</span> Februar</div></button></td>
          <td><button type="button"className="td-right" onClick={this.handleClick}><div className="months"><span className="month-num">08</span> August</div></button></td>
        </tr>
        <tr>
          <td><button type="button" className="td-left" onClick={this.handleClick}><div className="months"><span className="month-num">03</span> März</div></button></td>
          <td><button type="button" className="td-right"onClick={this.handleClick}><div className="months"><span className="month-num">09</span> September</div></button></td>
        </tr>
        <tr>
          <td><button type="button" className="td-left" onClick={this.handleClick}><div className="months"><span className="month-num">04</span> April</div></button></td>
          <td><button type="button"className="td-right" onClick={this.handleClick}><div className="months"><span className="month-num">10</span> Oktober</div></button></td>
        </tr>
        <tr>
          <td><button type="button" className="td-left" onClick={this.handleClick}><div className="months"><span className="month-num">05</span> Mai</div></button></td>
          <td><button type="button"className="td-right" onClick={this.handleClick}><div className="months"><span className="month-num">11</span> November</div></button></td>
        </tr>
        <tr>
          <td><button type="button"  className="td-left" onClick={this.handleClick}><div className="months"><span className="month-num">06</span> Juni</div></button></td>
          <td><button type="button" className="td-right" onClick={this.handleClick}><div className="months"><span className="month-num">12</span> Dezember</div></button></td>
        </tr>
      </tbody>
    </table> 
    );
  }
  handleClick(e){
    if (this.size==="MOBILE"){
      var monat=e.target.textContent;
      window.store.dispatch({
          type: 'change_Buchungsperiode',
          newBuchungsperiode: monat
      });
    }else super.handleClick(e);
  }
}
components.BuchungsperiodeWaehlen=BuchungsperiodeWaehlen;

export default BuchungsperiodeWaehlen;