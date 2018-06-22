import React,{ Component } from 'react';


class Help extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

 
  handleClick(e) {
      window.logger.debug("3. Event:"+ this.constructor.name);
      window.store.dispatch({
          type: 'change_leaf',
          newLeaf: this.constructor.name
      });
  }
  render(){
            return <button style={{color: 'red'}}>{this.text}</button>;
    }
    
  
}

export default Help;