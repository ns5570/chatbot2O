import React from 'react';
import './App.css';
import ChatbotComponent from './Chatbot';
// import ExpenseTracker from './Expense';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Chatbot</h1>
      </header>
      <main className="App-main">
        <ChatbotComponent />
      </main>
    </div>
  );
}

export default App;
