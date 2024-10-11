
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"


const EventComponent = ({Id, Title, Leader, BadgeNum, Link }: {Id: number, Title: string, Leader: string, BadgeNum: number, Link: string}) => {

const navigate = useNavigate();

const gotoEvent = ({id}: {id: number}) => {
    navigate(`/events/${id}`)
}

    return (
        <>
        <div onClick={() => gotoEvent({ id: Id })} className="flex flex-col w-48 h-32" key={Id}>
            <p>{BadgeNum}</p>
            <img className="w-40 h-24" src={Link} />x
            <p className="">{Title}</p>
            <p className=""> Gym Leader: {Leader}</p>x
        </div>
        </>
    )
}

export default EventComponent