'use client'; // only if you're using App Router

import React, { useState } from 'react';

const SimpleForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something... "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="user-input"
        />
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div data-testid="result">
          <p>You submitted:</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
