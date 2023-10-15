import React, { Component } from 'react';
import './Chatbot.css';

class ChatbotComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      chatHistory: []
    };
  }

  responses = {
    'hello': 'Hello there!',
    'help': 'Sure, I can assist you. You can ask me questions, get weather updates, or even tell a joke!',
    'weather': 'The weather today is sunny with a high of 75°F.',
    'joke': 'Why did the developer go broke? Because he used up all his cache!',
  };

  generateResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    const response = this.responses[lowerInput] || "I'm sorry, I didn't understand that request. Please ask something else.";
    return response;
  };

  handleUserInput = () => {
    const { userInput, chatHistory } = this.state;
    const chatbotResponse = this.generateResponse(userInput);

    const updatedChatHistory = [
      ...chatHistory,
      { role: 'user', content: userInput },
      { role: 'chatbot', content: chatbotResponse }
    ];

    this.setState({ chatHistory: updatedChatHistory, userInput: '' });
  };

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleUserInput();
    }
  };

  render() {
    const { userInput, chatHistory } = this.state;

    return (
      <div className="chatbot-container">
        <div className="chat-output" id="chat-output">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.role}-message`}>
              {`${message.role.charAt(0).toUpperCase() + message.role.slice(1)}: ${message.content}`}
            </div>
          ))}
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={this.handleInputChange}
          onKeyPress={this.handleInputKeyPress}
        />
      </div>
    );
  }
}

export default ChatbotComponent;
