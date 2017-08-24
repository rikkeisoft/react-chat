import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import '../styles/Login.css';
import ChatApp from './ChatApp';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { username: ''};
    //TODO: user submit event bind
  }

  //TODO: user submit event

  render() {
    if(this.state.submitted){
      return(
        <ChatApp username = {this.state.username}
        />
      );
    }
    return (
      //TODO: user name input form
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>CHAT</h2>
        </div>
        
      </div>
    );
  }
}
App.defaultProps = {};

export default App;
