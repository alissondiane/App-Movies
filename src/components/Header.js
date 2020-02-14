import React, { Component } from 'react';
//return React.createElement( 'div', null, 'Hello there, this is a React component!' ); sin jsx
 
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}
 
export default Header;