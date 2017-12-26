import React,{ Component } from 'react';

var components={};

class OfficeLeaf extends Component {
  constructor(props) {
    super(props);
    this.store=props.store;
    this.subject=props.subject || "Leaf";
    this.verb=props.verb || "shows";
    this.sentence=props.sentence || "OfficeLeaf is the base class for everything that can appear on any screen";
    this.size=props.size || "BUTTON";
    this.charactericon=this.subject[0]+this.verb[0];
    if (props.path)this.path=props.path.split(",");else this.path=["OfficeLeaf","ObRoot"];
    this.leafHTML=<h3>Couldn't render. Some error in {this.subject} {this.verb}</h3>;
    this.handleClick = this.handleClick.bind(this);
  }
  renderIcon(){
      this.leafHTML= <button type="button" onClick={this.handleClick}>{this.charactericon}</button>;
  }
  renderButton(){
      this.leafHTML=<button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button>;
  }
  renderListItem(){
      this.leafHTML= <div class="LIST_ITEM"><button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button></div>;
  }
  renderMobile(){
      var CurrentLeaf ;
      var pathHTML= this.path.map((officeLeaf)=>{
            CurrentLeaf = components[officeLeaf];
            var pathHTML = <CurrentLeaf size="BUTTON" />;
            return pathHTML;
          }
      )
      console.log(pathHTML);
        
      this.leafHTML=(
        <div className="MOBILE">
          <div id="path">{pathHTML}</div>
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
  handleClick() {
      console.log("Knopf geklickt");
      this.store.dispatch({
          type: 'change_leaf',
          newLeaf: 'ObRoot'
      });
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

components.OfficeLeaf =  OfficeLeaf;


export { OfficeLeaf,components};    