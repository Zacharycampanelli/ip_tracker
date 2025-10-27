import { Button, Input } from '@headlessui/react'

import arrow from '../assets/svgr/Arrow.tsx';

type IpInputProps = {
    IpAddress?: string;
    setIpAddress: (ip: string) => void;
}

const IpInput = ({ IpAddress, setIpAddress }: IpInputProps) => {
    console.log(IpAddress)
  return (
    <div className='input-wrapper'>
    <Input defaultValue={IpAddress} className="ip-input"/>
    <Button className="input-button" onClick={() => setIpAddress(IpAddress || '')}>{arrow}</Button>
    </div>
  )
}


export default IpInput