"use client"

import React from 'react';

function App() {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('/api/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { "user_id": "4iN010DwUFVMMMO6BxIuC6XVMG93", "name": "Andrew Hahn"}
        ),
      });

      console.log(await response.text());
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  };

  const handleButtonClick2 = async () => {
    try {

      const response = await fetch('/api/retrieve');
      console.log(await response.text());
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  };

  const handleButtonClick3 = async () => {
    try {
      const response = await fetch("/api/delete", {
        method: "POST",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error clearing database:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleButtonClick}>Call create users post /api/write</button>
      <button className="btn" onClick={handleButtonClick2}>Call get all data /api/retrieve</button>
      <button className="btn" onClick={handleButtonClick3}>Call delete post /api/delete</button>
    </div>
  );
}

export default App;