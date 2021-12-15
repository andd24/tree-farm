import React, { useEffect, useState } from "react"
import locationRepo from "../../repos/locationRepo"
import { Location } from "./location"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        locationRepo.getAll().then(loc => setLocations(loc))
    }, [])
    return (
        <>
        <div className="locations">
            {locations.map(l => <Location key={l.id} location={l} />)}
        </div>
        </>
    )
}
