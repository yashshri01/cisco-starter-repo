import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPDisplay({ isIPv6 }) {
  const [publicIP, setPublicIP] = useState('');

  useEffect(() => {
    // Determine the API URL based on IPv4 or IPv6
    const apiUrl = isIPv6
      ? 'https://api6.ipify.org?format=json'
      : 'https://api.ipify.org?format=json';

    // Fetch the user's public IP address
    axios
      .get(apiUrl)
      .then((response) => {
        setPublicIP(response.data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, [isIPv6]);

  return (
    <div>
      <h2>User’s public {isIPv6 ? 'IPv6' : 'IPv4'} Address:</h2>
      <p>{publicIP}</p>
    </div>
  );
}

export default IPDisplay;
