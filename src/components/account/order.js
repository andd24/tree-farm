import React from "react"
import { Link } from "react-router-dom"

export const Order = ({order}) => {
  
    return (
        <article className="card location" style={{ width: `18rem` }}>
            <section className="card-body">
                <h5 className="card-title">
                    <Link className="card-link"
                        to={{
                            pathname: `/account/${order.id}`,
                            state: { order: order }
                        }}>
                        {order.date}
                    </Link>
                </h5>
            </section>
            {/* <section>
                {location.address}
            </section>
            <section>
                {location.phone}
            </section>
            <section>
                {location.hours}
            </section> */}
        </article>
    )
}