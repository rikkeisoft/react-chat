import React from 'react';

class ChatInput extends React.Component{

  constructor(props){
    super(props);
    this.state = { chatInput: ''};
    //TODO: 
    //Handle text change event and submit message event
  }

  //TODO:
  //text change and submit event

  render(){
    return(
      <form className="chat-input"
            onSubmit={this.submitHandler}>
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required
        />
      </form>
    )
  }
}

ChatInput.defaultProps = {};

export default ChatInput;
