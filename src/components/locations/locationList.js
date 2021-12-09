import React, { useEffect, useState } from "react"
import locationRepo from "../../repos/locationRepo"


export const LocationList = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        locationRepo.getAll().then(loc => setLocations(loc))
    }, [])
    return (
        <>
        <h2>Our Locations</h2>
        <section class="locations">
        <div>
            {locations.map(l => l.name )}
        </div>
        </section>
        </>
    )
}