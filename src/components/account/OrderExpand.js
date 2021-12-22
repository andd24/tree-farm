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
                {/* <p className="lead detailCard__info">
                    {
                        `${order.height.height} foot tree with ${order.light.description}, ${order.flock.description}, and ${order.wreath.description}`
                    }
                </p> */}
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