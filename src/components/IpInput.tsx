import { Button, Input } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

import Arrow from '../assets/svgr/Arrow.tsx';
import type { IpDataType } from '../App.tsx';

type IpInputProps = {
  ipData?: IpDataType;
  setIpData: (data: IpDataType) => void;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ipSearchInput?: string;
};

const IpInput = ({ ipData, setIpData, handleSearch, ipSearchInput }: IpInputProps) => {

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIpData({
  //     ip_addresss: e.target.value,
  //     location: ipData?.location ?? '',
  //     timezone: ipData?.timezone ?? '',
  //     isp: ipData?.isp ?? '',
  //   });
  // };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    setIpData({
      ip_address: ipSearchInput ?? ipData?.ip_address ?? '',
      location: ipData?.location ?? '',
      timezone: ipData?.timezone ?? '',
      isp: ipData?.isp ?? '',
    });
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <Input value={ipSearchInput} onChange={(e) => handleSearch?.(e)} onBlur={handleSubmit} className="ip-input text-preset-4" />
      <Button type="submit" className="input-button">
        <Arrow />
      </Button>
    </form>
  );
};

export default IpInput;
