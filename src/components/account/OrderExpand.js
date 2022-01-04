import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import orderRepo from "../../repos/orderRepo";
import { useHistory } from "react-router"
import { Link } from "react-router-dom";
import "../auth/Login.css"

export const OrderExpand = () => {
    const [order, set] = useState({})
    const [heights, setHeights] = useState([])
    const { orderId } = useParams()
    const history = useHistory()

    useEffect(() => {
        orderRepo.get(orderId).then(set)
    }, [orderId])

    useEffect(() => {
        
        orderRepo.getAllLights()
        orderRepo.getAllFlocks()
        orderRepo.getAllWreaths()
    }, [])

    const deleteOrder = (id) => {
        orderRepo.delete(id)
        history.push("/account")
    } 

    const findHeight = () => {
        orderRepo.getAllHeights().then(setHeights)
        let foundHeight = heights.find(height => height.id === order.heightId)
        return foundHeight.height
    }

    return (
        <>
        <main className="container">
            <div>
            <h2 className="heading">Order #{order.id}</h2>
            <div className="box2">
            <p >
                    {
                        `${order.date} ` 
                    }
                </p>
                <p >
                    {
                        `$${order.total} ` 
                    }
                </p>
                <button type="button"
                        className="button"
                        key={orderId}
                        value={orderId}
                        onClick={() => { deleteOrder(orderId) } }>
                    Delete
                </button>
            </div>
            <section className="link">
                <Link to="/account">back to my account</Link>
            </section>
            </div>
            </main>
        </>
    )
}