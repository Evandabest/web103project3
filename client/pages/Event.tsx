import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EventsAPI from '../api/Events'

interface Event {
  Id: number
  Order: number
  Title: string
  Leader: string
  Link: string
  Description?: string
  BadgeNum?: number
}

export default function Component() {
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const getEvent = async () => {
      try {
        setLoading(true)
        const eventFromServer = await EventsAPI.getEventById(id)
        setEvent(eventFromServer)
      } catch (error) {
        console.error('Failed to fetch event:', error)
        setError('Failed to load event. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    getEvent()
  }, [id])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>
  }

  if (!event) {
    return <div className="flex items-center justify-center h-screen">Event not found</div>
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="relative">
          <img className="object-cover w-full h-64" src={event.Link} alt={event.Title} />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h1 className="text-3xl font-bold text-white">{event.Title}</h1>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl font-semibold text-gray-800">Gym Leader: {event.Leader}</p>
            {event.BadgeNum && (
              <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
                Gym #{event.BadgeNum}
              </span>
            )}
          </div>
          <p className="mb-4 text-gray-600">Order: {event.Order}</p>
          {event.Description && (
            <p className="text-gray-700">{event.Description}</p>
          )}
        </div>
      </div>
    </div>
  )
}