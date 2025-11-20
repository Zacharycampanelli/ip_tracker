import { Button, Input } from '@headlessui/react';

import Arrow from '../assets/svgr/Arrow.tsx';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

type IpInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
};

const IpInput = ({ value, onChange, onSubmit }: IpInputProps) => {
 
 const isMobile = useMediaQuery({ query: '(max-width: 768px)'
  }); 
 
  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={onChange}
        onBlur={handleSubmit}
        className="ip-input text-preset-4"
      />
      <Button type="submit" className="input-button">
        <Arrow />
      </Button>
    </form>
  );
};

export default IpInput;
