type DataCardItemProps = {
  data: string;
};

const DataCardItem = ({ data }: DataCardItemProps) => {
  return (
    <div className="data-card-item">
      <h2 className="text-preset-6">IP Address</h2>
      <p className="text-preset-3">{data}</p>
    </div>
  );
};

export default DataCardItem;
