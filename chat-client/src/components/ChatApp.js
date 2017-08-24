import React, {Component} from 'react';
import io from 'socket.io-client';
import config from '../config/config';

import Messages from './Messages';
import ChatInput from './ChatInput';

import '../styles/ChatApp.css';

class ChatApp extends Component{

  constructor(props){
    super(props);
    this.state= {
      messages: []
    };
    this.sendHandler = this.sendHandler.bind(this);

    //connect to server
    this.socket = io(config.api, { query: `username= ${props.username}` }).connect();
    //TODO: 
    //listen for message from server and show in messages box
    
  }

  sendHandler = (message)=>{
    //TODO:
    //function when user send a message 
  };

  render(){
    return(
      //TODO: add Messages component and ChatInput component
      <div className="container">
        <h3>React chat app</h3>
      </div>
    )
  }
}

ChatApp.defaultProps ={
  username: 'Anonymous'
};

export default ChatApp;