// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class BetragEingeben extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Betrag";
    this.verb = "eingeben";
    this.path = [];
  }

  renderListItem() {
    return (
       <div className="LIST_ITEM">
       <p>Betrag eingeben</p>
      <table>
        <tbody>
     
        <tr>
          <td><button className="numberButton" onClick={this.handleClick}>1</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>2</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>3</button></td>
        </tr>
         <tr>
          <td><button className="numberButton" onClick={this.handleClick}>4</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>5</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>6</button></td>
        </tr>
         <tr>
          <td><button className="numberButton" onClick={this.handleClick}>7</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>8</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>9</button></td>
        </tr>
         <tr>
          <td><button className="numberButton" onClick={this.handleClick}>0</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>00</button></td>
          <td><button className="numberButton" onClick={this.handleClick}>&lt;</button></td>
        </tr>
        
        </tbody>
        </table>
        </div>
    )
  }


  handleClick(e) {
    var ziffer = e.target.textContent;
    window.store.dispatch({
      type: 'type_pressed',
      character: ziffer
    });
  }
}
components.BetragEingeben=BetragEingeben;

export default BetragEingeben;