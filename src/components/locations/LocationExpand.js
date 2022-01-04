import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import locationRepo from "../../repos/locationRepo";
import "./location.css"
import { MapContainer } from "./maps";


export const LocationExpand = () => {
    const [location, set] = useState({})
    const { locationId } = useParams()

    useEffect(() => {
       locationRepo.get(locationId).then(set)
    }, [locationId])

    return (
        <>
            <div>
                <img alt="location icon" src={location.imgURL} className="image" />
                <h1 className="title">{location.name}</h1>
            </div>
            <div className="location-items">
                <p className="tag">
                {<Link to={`/orders`}>Place your order today!</Link>}
                </p>
                <p className="tag">{location.address}</p>
                <p className="tag">{location.hours}</p>
                <hr className="my-4" />
                <a className="tag" href="https://maps.google.com">Get Directions!</a>
                <div className="map" >
                    <MapContainer />
                </div>
            </div>
        </>
    )
}

