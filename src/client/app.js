import React, { useState } from 'react';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  async function generateText(prompt) {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    return data;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await generateText(prompt);
    setResponse(result.text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Inserisci il tuo prompt..."
        />
        <button type="submit">Genera</button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
};

export default App;
