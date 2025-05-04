'use client'

import { useEffect, useState } from 'react'
import { Card, CardBody } from "@heroui/card"

interface Visit {
  id: string
  timestamp: string
  ip_address: string
  region: string
}

export function StatsDashboard() {
  const [visits, setVisits] = useState<Visit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch('/api/visits')
        const { data } = await response.json()
        setVisits(data)
      } catch (error) {
        console.error('Failed to fetch visits:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVisits()
  }, [])

  // Calculate statistics
  const totalVisits = visits.length
  const uniqueIPs = new Set(visits.map(v => v.ip_address)).size
  const regions = visits.reduce((acc, visit) => {
    acc[visit.region] = (acc[visit.region] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  if (loading) {
    return <div className="p-4">Loading statistics...</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Website Visit Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardBody>
            <h2 className="text-xl font-semibold mb-2">Total Visits</h2>
            <p className="text-3xl font-bold">{totalVisits}</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h2 className="text-xl font-semibold mb-2">Unique Visitors</h2>
            <p className="text-3xl font-bold">{uniqueIPs}</p>
          </CardBody>
        </Card>
      </div>

      <Card className="mb-8">
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">Visits by Region</h2>
          <div className="space-y-2">
            {Object.entries(regions)
              .sort(([, a], [, b]) => b - a)
              .map(([region, count]) => (
                <div key={region} className="flex justify-between items-center">
                  <span>{region || 'Unknown'}</span>
                  <span className="font-semibold">{count}</span>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">Recent Visits</h2>
          <div className="space-y-2">
            {visits.slice(0, 10).map((visit) => (
              <div key={visit.id} className="flex justify-between items-center text-sm">
                <span>{new Date(visit.timestamp).toLocaleString()}</span>
                <span>{visit.region || 'Unknown'}</span>
                <span className="text-gray-500">{visit.ip_address}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
} 