import './App.css';

import { useEffect, useState } from 'react';

import IpInput from './components/IpInput';

function App() {
  const [IpAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const url = `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}${
          IpAddress ? `&ipAddress=${IpAddress}` : ''
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setIpAddress(data.ip);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchIp();
  }, [IpAddress]);

  return (
    <div className="body-container">
      <div>
        <h1 className="text-preset-2">IP Address Tracker</h1>
        <span className="background_image" />
        <IpInput IpAddress={IpAddress} setIpAddress={setIpAddress} />
      </div>
    </div>
  );
}

export default App;
