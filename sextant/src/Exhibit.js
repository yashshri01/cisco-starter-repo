import React from 'react';

function Exhibit({ publicIP, latency }) {
  return (
    <div className="exhibit">
      <h2>Networking Information</h2>
      <div className="exhibit-content">
        <p><strong>Public IP:</strong> {publicIP}</p>
        <p><strong>Latency Metrics:</strong> {latency}</p>
      </div>
    </div>
  );
}

export default Exhibit;


