import React,{ Component } from 'react';

class OfficeLeaf extends Component {
  constructor(props) {
    super(props);
    this.subject=props.subject || "Leaf";
    this.verb=props.verb || "shows";
    this.sentence=props.sentence || "OfficeLeaf is the base class for everything that can appear on any screen";
    this.size=props.size || "BUTTON";
    this.charactericon=this.subject[0]+this.verb[0];
    this.leafHTML=<h3>Couldn't render. Some error in {this.subject} {this.verb}</h3>;
  }
  renderIcon(){
      this.leafHTML= <button type="button" on-click="_onclick">{this.charactericon}</button>;
  }
  renderButton(){
      this.leafHTML=<button type="button" on-click="_onclick">{this.subject} {this.verb}</button>;
  }
  renderListItem(){
      this.leafHTML= <div class="LIST_ITEM"><button type="button" on-click="_onclick">{this.subject} {this.verb}</button></div>;
  }
  renderMobile(){
      this.leafHTML=(
        <div class="MOBILE">
          <div id="path">hallo </div>
          <h1>{this.subject} {this.verb}</h1>
          <p>{this.sentence}</p>
          <button type="button" on-click="_onclick">{this.subject} {this.verb}</button>
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
  render(){
    switch (this.size) {
        case 'ICON':
            this.renderIcon();
            break;
        case 'BUTTON':
            this.renderButton();
            break;
        case 'LIST_ITEM':
            this.renderListItem();
            break;
        case 'MOBILE':
            this.renderMobile();
            break;
        default:
            
    }
    return this.leafHTML;
  }
}

export default OfficeLeaf;