import React, { useState } from 'react';
import QRCodeDisplay from './components/QRCodeDisplay';
import Question from './components/Question';
import './App.css';

const App = () => {
  const [showQRCode, setShowQRCode] = useState(true);
  const [message, setMessage] = useState('');
  const [playerName, setPlayerName] = useState(''); // Track player's name

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setMessage(`Congratulations, ${playerName}! Your answer is correct.`);
      setShowQRCode(false);
      // Move to the next question after 3 seconds
      setTimeout(() => {
        setShowQRCode(true);
        setMessage('');
      }, 3000);
    } else {
      setMessage('Wrong answer. Try again!');
    }
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value); // Update the player's name
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to KBC</h1>

      {/* Player's Name Input Section */}
      <div style={{ marginBottom: '30px' }}>
        <label htmlFor="playerName" style={{ marginRight: '10px' }}>Enter your name: </label>
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </div>

      {/* QR Code Section */}
      <div style={{ marginBottom: '30px' }}>
        {showQRCode && <QRCodeDisplay data="http://localhost:3000/" />}
      </div>

      {/* Question and Message Section */}
      <Question onAnswer={handleAnswer} />
      {message && <h3>{message}</h3>}
    </div>
  );
};

export default App;
