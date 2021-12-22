import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import locationRepo from "../../repos/locationRepo";
import "./location.css"


export const LocationExpand = () => {
    const [location, set] = useState({})
    const { locationId } = useParams()


    useEffect(() => {
       locationRepo.get(locationId).then(set)
    }, [locationId])

    return (
        <>
            <div>
                <h1 className="heading">{location.name}</h1>

                <img alt="location icon" src={location.imgURL} className="icon--location" />
                
                <p className="tag">{location.address}</p>
                <p className="tag">{location.hours}</p>
                <hr className="my-4" />
                <p className="tag">
                {<Link to={`/orders`}>Place your order today!</Link>}
                </p>
            </div>
        </>
    )
}