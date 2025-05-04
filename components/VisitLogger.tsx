'use client'

import { useEffect } from 'react'

export function VisitLogger() {
  useEffect(() => {
    const logVisit = async () => {
      // Check if we've already logged a visit in this session
      if (sessionStorage.getItem('visitLogged')) {
        return
      }

      try {
        // Get IP and region using a free IP geolocation API
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const { ip } = await ipResponse.json()
        
        const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`)
        const { region } = await geoResponse.json()

        // Log the visit
        await fetch('/api/visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ip_address: ip,
            region: region,
          }),
        })

        // Mark this session as logged
        sessionStorage.setItem('visitLogged', 'true')
      } catch (error) {
        console.error('Failed to log visit:', error)
      }
    }

    logVisit()
  }, [])

  return null
} 