import React from "react"
import { Link } from "react-router-dom"

export const Order = ({order}) => {
  
    return (
        <article className="card location" style={{ width: `18rem` }}>
            <section className="card-body">
                <h5 className="card-title">
                    <Link className="order"
                        to={{
                            pathname: `/account/${order.id}`,
                            state: { order: order }
                        }}>
                        Order# {order.id} 
                    </Link>
                </h5>
                <div className="card-info" >{order.date}</div>
                <div className="card-info" >{order.height.height} ft tree with {order.light.description}, {order.flock.description} and {order.wreath.description}</div>
                <div className="card-info" >${order.total}</div>
            </section>
        </article>
    )
}