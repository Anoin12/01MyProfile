import React, { useState } from 'react';

export default function Counter() {
  // 1. Set up state for the counter
  const [count, setCount] = useState(0);

  // 2. Handlers for buttons
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simple Counter</h1>
      <p style={styles.count}>{count}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increase}>Increase</button>
        <button style={styles.button} onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

// Basic inline styles for clean UI
const styles = {
  container: {
    maxWidth: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f0f8ff',
  },
  title: {
    marginBottom: '20px',
    color: '#007bff',
  },
  count: {
    fontSize: '48px',
    margin: '20px 0',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    transition: 'background-color 0.3s ease',
  },
};