import React, { useEffect, useState } from "react"
import locationRepo from "../../repos/locationRepo"
import { Location } from "./location"
import "./location.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        locationRepo.getAll().then(loc => setLocations(loc))
    }, [])
    return (
        <>
        <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlohQgx4Yk06UqBPbnDy5GMacm5dITvVlRw&usqp=CAU" alt="christmas tree" />
        <div className="locations">
            {locations.map(l => <Location key={l.id} location={l} />)}
        </div>
        </>
    )
}
