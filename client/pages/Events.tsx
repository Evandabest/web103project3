
import React from 'react'
import {useState, useEffect} from 'react'
import EventsAPI from '../api/Events'
import Eventcomponent from "../components/eventComp.tsx"

export interface event {
    Id: number,
    Title: string,
    Leader: string,
    Order: number,
    Link: string
}

const Events = () => {

    const [events, setEvents] = useState<event[]> ([])
    useEffect(() => {
        const getEvents = async () => {
            const eventsFromServer = await EventsAPI.getAllEvents()
            console.log(eventsFromServer)
            setEvents(eventsFromServer)
        }
        getEvents()
    }, [])

    return (
        <div className='w-screen h-screen'>
            {events? events.map((event) => 
            <>
                <Eventcomponent Id={event.Id} Title={event.Title} Leader={event.Leader} BadgeNum={event.Order} Link={event.Link}/>
            </> 
            ) : (null)}
        </div>
    )
}
 
export default Events