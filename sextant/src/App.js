import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="container">
          <Exhibit title="A Field Technician Dashboard">
            <p>Click here for more Information</p>
            <button>Click Me</button>
          </Exhibit>
      </div>
    </div>
  );
}

export default App;

