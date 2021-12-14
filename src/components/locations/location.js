import React from "react"
import { Link } from "react-router-dom"
// import locationImage from "./location.png"
import "./location.css"

export default ({location}) => {
  
    return (
        <article className="card location" style={{ width: `18rem` }}>
            <section className="card-body">
                <h5 className="card-title">
                    <Link className="card-link"
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        {location.name}
                    </Link>
                </h5>
            </section>
            <section>
                {location.address}
            </section>
            <section>
                {location.phone}
            </section>
            <section>
                {location.hours}
            </section>
        </article>
    )
}