import React, { useState } from 'react';
import './App.css';

function App() {
  // Define state for student details
  const [studentId, setStudentId] = useState('101413772');
  const [studentName, setStudentName] = useState('Ishika Koshiya');

  return (
    <div className="app">
      
      <img src="react-logo.png" alt="React Logo" className="logo" />

      <h1>Welcome to Fullstack Development - I</h1>
      <h2>React JS Programming Week09 Lab Exercise</h2>

      <p>Student ID: {studentId}</p>
      <p>Name: {studentName}</p>
      <p>George Brown College, Toronto</p>
    </div>
  );
}

export default App;
