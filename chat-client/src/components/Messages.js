import React from 'react';
import Message from './Message';

class Messages extends React.Component{

  componentDidUpdate(){
    //TODO: function when messages component update
  }

  render(){
    const messages = this.props.messages.map(
      (message, i) => {
        return(
          <Message
            //TODO: Loop through all the messages in the state and create a Message component
          />
        )
    });
    return(
      <div className="messages" id="messageList">
        { messages }
      </div>
    )
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;