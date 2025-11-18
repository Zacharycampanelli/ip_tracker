import 'normalize.css';
import './App.css';

import { useEffect, useState } from 'react';

import { APIProvider } from '@vis.gl/react-google-maps';
import DataCard from './components/DataCard.tsx';
import IpInput from './components/IpInput';
import MapView from './components/MapView.tsx';

export type IpDataType = {
  location: string;
  timezone: string;
  isp: string;
  ip_address: string;
};

function App() {
  const [IpSearchInput, setIpSearchInput] = useState('');
  const [IpData, setIpData] = useState<IpDataType>({
    location: '',
    timezone: '',
    isp: '',
    ip_address: '',
  });
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        formatData(data);
        setIpSearchInput(data.ip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIp();
  }, []);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpSearchInput(e.target.value);
  };

  const getZipCode = async (ipAddress: string) => {
    try {
      const url = `https://ipinfo.io/${ipAddress}/json?token=${import.meta.env.VITE_IPINFO_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.postal;
    } catch (error) {
      console.log(error);
    }
  };

  const formatData = async (data: any) => {
    const zipcode = await getZipCode(data.ip);
    setIpData({
      ip_address: data.ip,
      location: `${data.location.region}, ${data.location.country} ${zipcode}`,
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
    });
    setCoordinates({
      lat: data.location.lat,
      lng: data.location.lng,
    });
  };

  const handleSearch = async () => {
    try {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${IpSearchInput}`;
      const response = await fetch(url);
      const data = await response.json();
      formatData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="body-container">
        <div className="card-container">
          <div className="card">
            <h1 className="text-preset-2">IP Address Tracker</h1>
            <span className="background_image" />
            <IpInput
              value={IpSearchInput}
              onChange={handleSearchInput}
              onSubmit={handleSearch}
            />
          </div>
        </div>
        <MapView coordinates={coordinates}  />
            <DataCard
              location={IpData.location}
              timezone={IpData.timezone}
              isp={IpData.isp}
              ipAddress={IpData.ip_address}
            />
      </div>
    </APIProvider>
  );
}

export default App;
