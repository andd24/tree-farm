import React, { useEffect, useState } from "react"
import userRepo from "../../repos/userRepo"
import orderRepo from "../../repos/orderRepo"
import { Link, Route, Redirect } from "react-router-dom"
import { Order } from "./order"

export const AccountPage = () => {
    const [user, setUser] = useState({})
    const [orders, setOrders] = useState([])

    useEffect(() => {
        userRepo.get(parseInt(localStorage.getItem("farm_user"))).then(user => setUser(user))
        orderRepo.getOrderByUserId(parseInt(localStorage.getItem("farm_user"))).then(orders => setOrders(orders))
    }, []) 

    if (localStorage.getItem("farm_user")) {
    return (
        <>  
        <h2>My Account</h2>
        <div>
           Name: {user.name}
        </div>
        <div>
            Address: {user.address}
        </div>
        <div>
            Email: {user.email}
        </div>
        <div>   
            Phone number: {user.phone}
        </div>
        <div>
        <Link className="update__link" to="/account/form">Need to update your info?</Link>
        </div>
        <h2>My Orders</h2>
        <section className="orders">
        <div className="orders">
            {orders.map(o => <Order key={o.id} order={o} />)}
        </div>
        </section>
        </>
    )}
    else {
        return <Redirect to="/login" />;
      }
}   
