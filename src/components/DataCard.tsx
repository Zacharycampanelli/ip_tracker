import DataCardItem from './DataCardItem';

type DataCardProps = {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
};

const DataCard = ({ ipAddress, location, timezone, isp }: DataCardProps) => {
  const items =[
    { label: 'IP Address', value: ipAddress },
    { label: 'Location', value: location },
    { label: 'Timezone', value: timezone },
    { label: 'ISP', value: isp },
  ]
  return (
    <div className="data-card">
      {items.map((item) => (
        <DataCardItem key={item.label} label={item.label} data={item.value} />
      ))}
    </div>
  );
};

export default DataCard;
