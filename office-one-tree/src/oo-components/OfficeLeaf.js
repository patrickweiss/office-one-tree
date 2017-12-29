import React,{ Component } from 'react';

var components={};

class OfficeLeaf extends Component {
  constructor(props) {
    super(props);
    this.size=props.size || "BUTTON";
    this.handleClick = this.handleClick.bind(this);
    this.initialize(props);
  }
  initialize(props){
    this.subject=props.subject || "Leaf";
    this.verb=props.verb || "shows";
    this.sentence=props.sentence || "OfficeLeaf is the base class for everything that can appear on any screen";
    this.charactericon=this.subject[0]+this.verb[0];
    if (props.path)this.path=props.path.split(",");else this.path=["OfficeLeaf","ObRoot"];
  }
  renderIcon(){
      return <button type="button" onClick={this.handleClick}>{this.charactericon}</button>;
  }
  renderButton(){
      return <button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button>;
  }
  renderListItem(){
      return <div className="LIST_ITEM"><button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button></div>;
  }
  renderPath() {
    var CurrentLeaf;
    var pathHTML = [];
    //Buchungsperiode einfügen, wenn diese ausgewählt wurde
    if (window.store.getState().UI.buchungsperiode) this.path.splice(1,0,"BuchungsperiodeWaehlen");
    for (var i = 0; i < this.path.length; i++) {
      CurrentLeaf = components[this.path[i]];
      if (i === this.path.length - 1) pathHTML.push(<CurrentLeaf size="BUTTON" />);
        else pathHTML.push(<CurrentLeaf size="ICON" />);
    }
    return <div className="LIST_ITEM" id="path">{pathHTML}</div>;
  }
  
  renderMobile(){
  
      return(

        <div className="MOBILE">
          <h1>{this.subject} {this.verb}</h1>
          <p>{this.sentence}</p>
          <button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button>
          <ul>
            <li>path:StringArray with oo-leaf-names</li>
            <li>size = ICON || BUTTON || LIST_ITEM || MOBILE || TABLET</li>
            <li>purpose = INFORMATION || NAVIGATION || DATA_ENTRY</li>
            <li>subject = String describing the type of the entity the element is doing something with</li>
            <li>verb = String describing the type of action the element is doing with the subject</li>
            <li>sentence = String describing verb and subject in more detail</li>
          </ul>
        </div>
      )
  }
  handleClick(e) {
      console.log(this.constructor.name+" geklickt");
      window.store.dispatch({
          type: 'change_leaf',
          newLeaf: this.constructor.name
      });
  }
  render(){
    this.leafHTML="";
    switch (this.size) {
        case 'ICON':
            return this.renderIcon();
        case 'BUTTON':
            return this.renderButton();
        case 'LIST_ITEM':
            return this.renderListItem();
        case 'MOBILE':
            return <div>{this.renderPath()}{this.renderMobile()}</div>;
        default:
            return <h1>Component has no valis size</h1>
    }
    
  }
}

components.OfficeLeaf =  OfficeLeaf;


export { OfficeLeaf,components};    