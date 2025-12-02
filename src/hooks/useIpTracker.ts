import { useState } from 'react';

// 1. Move the Type definition here (or to a separate types file) so the hook knows what it is
export type IpDataType = {
  location: string;
  timezone: string;
  isp: string;
  ip_address: string;
};

// 2. Create the Hook Function
export const useIpTracker = () => {
  // 3. Define State INSIDE the function
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

  const [IpSearchInput, setIpSearchInput] = useState('');

  const [error, setError] = useState<string | null>(null);
  
  // 4. Define Helper functions INSIDE the function (so they can access 'set' functions)
  const getZipCode = async (ipAddress: string) => {
    try {
      const url = `https://ipinfo.io/${ipAddress}/json?token=${import.meta.env.VITE_IPINFO_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.postal;
    } catch (error) {
      setError(`Failed to fetch zip code: ${error}`);
    }
  };

  const formatData = async (data: any) => {
    // Note: data.ip might be undefined depending on API, check logic if needed
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

  const fetchIp = async () => {
    try {
      const url = `https://api.ipstack.com/check?access_key=${import.meta.env.VITE_IP_STACK_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      formatData(data);
      setIpSearchInput(data.ip);
    } catch (error) {
      setError(`Failed to fetch IP data: ${error}`);
    }
  };

  const handleSearch = async () => {
    try {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${IpSearchInput}`;
      const response = await fetch(url);
      const data = await response.json();
      formatData(data);
    } catch (error) {
      setError(`Failed to fetch searched IP data: ${error}`);
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpSearchInput(e.target.value);
  };

  // 5. RETURN the values and functions you want the component to use
  return {
    IpData,
    coordinates,
    IpSearchInput,
    fetchIp,
    handleSearch,
    handleSearchInput,
  };
};