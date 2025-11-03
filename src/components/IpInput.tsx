import { Button, Input } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

import Arrow from '../assets/svgr/Arrow.tsx';
import type { IpDataType } from '../App.tsx';

type IpInputProps = {
  ipData?: string;
  setIpData: (data: IpDataType) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ipSearchInput?: string;
};

const IpInput = ({ ipData, setIpData, onChange, ipSearchInput }: IpInputProps) => {

 
  
  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    setIpData({
      ip_addresss: ipSearchInput,
      location: ipData?.location ?? '',
      timezone: ipData?.timezone ?? '',
      isp: ipData?.isp ?? '',
    });
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <Input value={ipSearchInput} onChange={(e) => onChange?.(e)} onBlur={handleSubmit} className="ip-input text-preset-4" />
      <Button type="submit" className="input-button">
        <Arrow />
      </Button>
    </form>
  );
};

export default IpInput;
