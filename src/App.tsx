import 'normalize.css';
import './App.css';

import { useEffect, useState } from 'react';

import { APIProvider } from '@vis.gl/react-google-maps';
import DataCard from './components/DataCard.tsx';
import IpInput from './components/IpInput';
import MapView from './components/MapView.tsx';
import { useBreakpoints } from './hooks/useBreakpoints.ts';
import { useIpTracker } from './hooks/useIpTracker.ts';

function App() {
  const { isMobile } = useBreakpoints();
  
  const { 
    IpData, 
    IpSearchInput, 
    coordinates, 
    fetchIp, 
    handleSearch, 
    handleSearchInput 
  } = useIpTracker();
  
  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="body-container">
        <span className="background_image" />
        <div className="card-container">
          <div className="card">
            <h1 className={isMobile ? `text-preset-2` : 'text-preset-1'}>IP Address Tracker</h1>
            <div className="search-section">
              <IpInput value={IpSearchInput} onChange={handleSearchInput} onSubmit={handleSearch} />
              <DataCard
                location={IpData.location}
                timezone={IpData.timezone}
                isp={IpData.isp}
                ipAddress={IpData.ip_address}
              />
            </div>
          </div>
        </div>
        <MapView coordinates={coordinates} />
      </div>
    </APIProvider>
  );
}

export default App;
