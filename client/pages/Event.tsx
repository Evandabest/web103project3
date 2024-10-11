



import React, {useState, useEffect} from 'react'
import EventsAPI from '../api/Events'
import { event } from './Events'

const Event = (params: any) => {
    const [event, setEvent] = useState<event>()

    useEffect(() => {
        const getEvent = async () => {
            const eventFromServer = await EventsAPI.getEventById(params.id)
            console.log(eventFromServer)
            setEvent(eventFromServer)
        }
        getEvent()
    }, [])

    return (
        <div className="flex flex-col w-48 h-32" key={event?.Id}>
            <p>{event?.Order}</p>
            <img className="w-40 h-24" src={event?.Link} />x
            <p className="">{event?.Title}</p>
            <p className=""> Gym Leader: {event?.Leader}</p>x
         </div>
    )
}
 
export default Event