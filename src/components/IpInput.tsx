import { Button, Input } from '@headlessui/react';
import React, { useState } from 'react';

import Arrow from '../assets/svgr/Arrow.tsx';
import type { IpDataType } from '../App.tsx';

type IpInputProps = {
  IpData?: IpDataType;
  setIpData: (data: IpDataType) => void;
};

const IpInput = ({ IpData, setIpData }: IpInputProps) => {
  const [value, setValue] = useState<string>(IpData?.ip_addresss || '');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    setIpData({
      ip_addresss: value.trim(),
      location: IpData?.location ?? '',
      timezone: IpData?.timezone ?? '',
      isp: IpData?.isp ?? '',
    });
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} onBlur={handleSubmit} className="ip-input text-preset-4" />
      <Button type="submit" className="input-button">
        <Arrow />
      </Button>
    </form>
  );
};

export default IpInput;
