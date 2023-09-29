import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit'; 
import './App.css';

function App() {
  // Simulated data (replace with real data fetching logic)
  const [publicIP, setPublicIP] = useState('Loading...');
  const [latency, setLatency] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setPublicIP('192.168.1.100'); // Replace with actual public IP
      setLatency('50 ms'); // Replace with actual latency metric
    }, 2000); // Simulated delay for data fetching
  }, []);

  return (
    <div className="App">
      <Banner/>
      <div className="container">
        {/*Exhibit */}
        <Exhibit publicIP={publicIP} latency={latency} />
        <p>This is 'Sextant'-A Field Technician Dashboard <br></br> Click here for more Information</p>
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default App;

