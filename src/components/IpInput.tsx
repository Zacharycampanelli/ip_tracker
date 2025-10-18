import { Input } from '@headlessui/react'

type IpInputProps = {
    IpAddress?: string;
    setIpAddress: (ip: string) => void;
}

const IpInput = ({ IpAddress, setIpAddress }: IpInputProps) => {
  return (
    <Input defaultValue={IpAddress} className="ip-input" placeholder="Search for any IP address or domain" />
  )
}

export default IpInput
