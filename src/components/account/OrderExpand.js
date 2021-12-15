import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import orderRepo from "../../repos/orderRepo";
import { useHistory } from "react-router"

export const OrderExpand = () => {
    const [order, set] = useState({})
    const { orderId } = useParams()
    const history = useHistory()

    useEffect(() => {
        orderRepo.get(orderId)
        .then((o) => {set(o)})
    }, [orderId])

    const deleteOrder = (id) => {
        orderRepo.delete(id)
        history.push("/account")
    } 

    return (
        <>
            <div className="jumbotron detailCard">
                <h1 className="display-4">{order.date}</h1>
                {/* <p className="lead detailCard__lead">
                {<Link to={`/orders`}>Place your order today!</Link>}
                </p>
                <img alt="location icon" src={location.imgURL} className="icon--location" height="250" width="350"/>
                <hr className="my-4" /> */}
                <p className="lead detailCard__info">
                    {
                        `$${order.total}`
                    }
                </p>
                <button type="button"
                        className="btn btn-success "
                        key={order.id}
                        value={order.id}
                        onClick={() => { deleteOrder(order.id) } }>
                    Delete
                </button>
            </div>
        </>
    )
}