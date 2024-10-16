import React, { useState, useEffect } from 'react';
import locationAPI from '../api/Locations';
import Location from '../components/locationComp';

interface LocationProps {
    Id: number;
    Name: string;
    Type: string;
    Leader: string;
    BadgeNum: number;
    link: string;
}

export default function Component() {
    const [locations, setLocations] = useState<LocationProps[]>([]);

    useEffect(() => {
        const getLocations = async () => {
            const locationsFromServer = await locationAPI.getAllLocations();
            setLocations(locationsFromServer as LocationProps[]);
        };
        getLocations();
    }, []);

    return (
        <div className="min-h-screen p-8 bg-indigo-700">
            <h1 className="mb-8 text-4xl font-bold text-white">Locations</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {locations.map((location) => (
                    <Location
                        key={location.Id}
                        Id={location.Id}
                        Name={location.Name}
                        Type={location.Type}
                        Leader={location.Leader}
                        BadgeNum={location.BadgeNum}
                        Link={location.link}
                    />
                ))}
            </div>
        </div>
    );
}