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
            <div className="jumbotron detailCard">
                <h1 className="display-4">{location.name}</h1>
                <p className="lead detailCard__lead">
                {<Link to={`/orders`}>Place your order today!</Link>}
                </p>
                <img alt="location icon" src={location.imgURL} className="icon--location" height="250" width="350"/>
                <hr className="my-4" />
                <p className="lead detailCard__info">
                    {
                        `We are located at ${location.address} and are here
                        ${location.hours} so come by and grab a tree, a handmade 
                        wreath, and cup of hot cocoa.`
                    }
                </p>
            </div>
        </>
    )
}