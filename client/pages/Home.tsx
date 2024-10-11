
import React, {useState, useEffect} from 'react'
import locationAPI from '../api/Locations'
import Location from '../components/locationComp'

interface location {
    Id: number
    Name: string,
    Type: string,
    Leader: string,
    BadgeNum: number,
    link: string
}

const Home = () => {
    const [locations, setLocations] = useState<location[]>([])

    useEffect(() => {
        const getLocations = async () => {
            const locationsFromServer = await locationAPI.getAllLocations()
            console.log(locationsFromServer)
            setLocations(locationsFromServer)
        }
        getLocations()
    }, [])


    return (
        <div>
            <h1>Home</h1>
            {
                locations.map((location: any) => (
                    <Location Id={location.Id} Name={location.Name} Type={location.Type} Leader={location.Leader} BadgeNum={location.BadgeNum} Link={location.link}/>
                ))
            }
        </div>
    )
}
 
export default Home