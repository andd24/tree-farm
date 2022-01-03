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
        <img className="image" src="https://ourfirstyearhere.files.wordpress.com/2017/12/christmas-header.jpg?w=645" alt="christmas tree" />
        <h1 className="heading">Our Locations</h1>
        <div className="locations">
            {locations.map(l => <Location key={l.id} location={l} />)}
        </div>
        </>
    )
}
