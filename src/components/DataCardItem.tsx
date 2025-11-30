import { useBreakpoints } from '../hooks/useBreakpoints';

type DataCardItemProps = {
  label: string;
  data: string;
};

const DataCardItem = ({ label, data }: DataCardItemProps) => {
  const { isMobile, isTablet } = useBreakpoints();
  return (
    <div className="data-card-item">
      <h2 className={isMobile ? `text-preset-6` : `text-preset-5`}>{label}</h2>
      <p className={isTablet ? `text-preset-3` : `text-preset-2`}>{/* {data} */}Test Data</p>
    </div>
  );
};

export default DataCardItem;
