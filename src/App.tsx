import './App.css';

import { useEffect, useState } from 'react';

import IpInput from './components/IpInput';

type IpDataType = {
  location: string;
  timezone: string;
  isp: string;
};
function App() {
  const [IpAddress, setIpAddress] = useState('');
  const [IpData, setIpData] = useState<IpDataType>({
    location: '',
    timezone: '',
    isp: '',
  });
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const url = `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}${
          IpAddress ? `&ipAddress=${IpAddress}` : ''
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setIpAddress(data.ip);
        console.log(data);
        formatData(data);
        getZipCode(IpAddress);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchIp();
  }, [IpAddress]);

  const getZipCode = async () => {
    try {
      const url = `https://ipinfo.io/${IpAddress}/json?token=${import.meta.env.VITE_IPINFO_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.postal;
    } catch (error) {
      console.log(error);
    }
  };

  const formatData = async (data: any) => {
    const zipcode = await getZipCode();
    setIpData({
      location: `${data.location.region}, ${data.location.country} ${zipcode}`,
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
    });
  };

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
