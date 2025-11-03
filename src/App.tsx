import './App.css';

import { useEffect, useState } from 'react';

import IpInput from './components/IpInput';

export type IpDataType = {
  location: string;
  timezone: string;
  isp: string;
  ip_addresss: string;
};
function App() {
  const [IpSearchInput, setIpSearchInput] = useState('');
  const [IpData, setIpData] = useState<IpDataType>({
    location: '',
    timezone: '',
    isp: '',
    ip_addresss: '',
  });

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const url = `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}${
          IpData.ip_addresss ? `&ipAddress=${IpData.ip_addresss}` : ''
        }`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setIpData({ ...IpData, ip_addresss: data.ip });
        formatData(data);
        getZipCode();
        setIpSearchInput(data.ip);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchIp();
  }, [IpData.ip_addresss]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpSearchInput(e.target.value);
  }
  
  const getZipCode = async () => {
    try {
      const url = `https://ipinfo.io/${IpData.ip_addresss}/json?token=${import.meta.env.VITE_IPINFO_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.postal;
    }
    catch (error) {
      console.log(error);
    }
  };
  

  const formatData = async (data: any) => {
    const zipcode = await getZipCode();
    setIpData({
      ip_addresss: data.ip,
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
        <IpInput ipData={IpData.ip_addresss} setIpData={setIpData} onChange={handleSearchInput} ipSearchInput={IpSearchInput} />
      </div>
    </div>
  );
}

export default App;
