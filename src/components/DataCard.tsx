import DataCardItem from './DataCardItem';

type DataCardProps = {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
};

const DataCard = ({ ipAddress, location, timezone, isp }: DataCardProps) => {
  return (
    <div className="data-card">
      <DataCardItem data={ipAddress} />
      <DataCardItem data={location} />
      <DataCardItem data={timezone} />
      <DataCardItem data={isp} />
    </div>
  );
};

export default DataCard;
