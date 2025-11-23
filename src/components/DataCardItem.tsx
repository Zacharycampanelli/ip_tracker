type DataCardItemProps = {
  label: string;
  data: string;
};

const DataCardItem = ({ label, data }: DataCardItemProps) => {
  return (
    <div className="data-card-item">
      <h2 className="text-preset-6">{label}</h2>
      <p className="text-preset-3">{data}</p>
    </div>
  );
};

export default DataCardItem;
