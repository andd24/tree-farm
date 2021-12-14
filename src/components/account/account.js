import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import userRepo from "../../repos/userRepo"
import orderRepo from "../../repos/orderRepo"
import useResourceResolver from "../../hooks/resource"
import { Link } from "react-router-dom"

export const AccountPage = () => {
    const [user, setUser] = useState({})
    const [orders, setOrders] = useState([])
    const { resolveResource, resource } = useResourceResolver()
    const history = useHistory()

    useEffect(() => {
        userRepo.get(parseInt(localStorage.getItem("farm_user"))).then(user => setUser(user))
        orderRepo.getOrderByUserId(parseInt(localStorage.getItem("farm_user"))).then(orders => setOrders(orders))
    }, [])

    const deleteOrder = (event) => {
        return orderRepo.delete(event.target.value).then(() => 
        orderRepo.getOrderByUserId(parseInt(localStorage.getItem("farm_user")))).then(orders => setOrders(orders))
    }   

    const logout = () => {
        localStorage.removeItem("farm_user")
        history.push("/")
    }

    return (
        <>  
        <h2>My Account</h2>
        <div>
           Name: {user.name}
        </div>
        <div>
            Email: {user.email}
        </div>
        <div>
            Address: {user.address}
        </div>
        <div>
        <button type="button"
                className="btn btn-success "
                onClick={() => { logout()  }}>
            Logout
        </button>
        </div>
        <h2>My Orders</h2>
        <section class="orders">
        {orders.map(order => 
            {return (<article>
            <div>{order.date} </div>
            <div>${order.total}</div>
            <div>
            <button type="button"
                    className="btn btn-success "
                    key={order.id}
                    value={order.id}
                    onClick={(e) => { deleteOrder(e)  }}>
                Delete
            </button>
            </div>
            </article>)}
            )}
        </section>
        </>
    )
}   



