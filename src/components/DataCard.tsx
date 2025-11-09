type DataCardProps = {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
};

const DataCard = ({ ipAddress, location, timezone, isp }: DataCardProps) => {
  return (
    <div className="data-card">
      <div className="data-card-item">
        <h2 className="text-preset-6">IP Address</h2>
        <p className="text-preset-3">{ipAddress}</p>
      </div>
      <div className="data-card-item">
        <h2 className="text-preset-6">Location</h2>
        <p className="text-preset-3">{location}</p>
      </div>
      <div className="data-card-item">
        <h2 className="text-preset-6">Timezone</h2>
        <p className="text-preset-3">{timezone}</p>
      </div>
      <div className="data-card-item">
        <h2 className="text-preset-6">ISP</h2>
        <p className="text-preset-3">{isp}</p>
      </div>
    </div>
  );
};

export default DataCard;
