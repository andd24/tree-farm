import React from "react"
import { Link } from "react-router-dom"
import "./location.css"

export const Location = ({location}) => {
  
    return (
        <article className="location" >
            <section className="card-body">
                <h1 className="card-title">
                    <Link className="card-link"
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        {location.name}
                    </Link>
                </h1>
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