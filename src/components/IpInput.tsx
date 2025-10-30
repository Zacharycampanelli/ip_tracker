import { Button, Input } from '@headlessui/react';
import React, { useState } from 'react';

import Arrow from '../assets/svgr/Arrow.tsx';

type IpInputProps = {
  IpAddress?: string;
  setIpAddress: (ip: string) => void;
};

const IpInput = ({ IpAddress, setIpAddress }: IpInputProps) => {
  const [value, setValue] = useState<string>(IpAddress || '');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    setIpAddress(value.trim());
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} className="ip-input" />
      <Button type="submit" className="input-button">
        <Arrow />
      </Button>
    </form>
  );
};

export default IpInput;
