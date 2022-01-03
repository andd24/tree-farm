import React from "react"
import { Link } from "react-router-dom"
import "./location.css"

export const Location = ({location}) => {
  
    return (
        <>
        <div className="location">
            <div className="loc-image" src=""></div>
            <div className="loc-title">
                    <Link className="loc-link"
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        {location.name}
                    </Link>
                </div>
            <div className="loc-text"></div>
        </div>
        </> 
    )
}