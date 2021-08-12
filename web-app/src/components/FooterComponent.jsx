import React, { Component } from 'react';

class FooterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  
  render() {
    return (
      <div style={{'text-align': 'center'}}>
        <footer className={"footer"}>
          <span className={"text-muted"}>made by song100sh</span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;