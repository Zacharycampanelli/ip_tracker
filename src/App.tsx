import './App.css'

import { useEffect, useState } from 'react'

import bgMobile from './assets/images/pattern-bg-mobile.png'

function App() {
const [IpAddress, setIpAddress] = useState('')

useEffect(() => {
  const fetchIp = async () => {
    try{
      const url = `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.IPIFY_API_KEY}${IpAddress ? `&ipAddress=${IpAddress}` : ''}`
      const response = await fetch(url)
    }
  }
}, [])
  return (
    <>
  <div>
    <span className='background_image'/>
  </div>
    </>
  )
}

export default App
