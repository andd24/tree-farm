import React, { useEffect, useState } from "react"
import userRepo from "../../repos/userRepo"
import orderRepo from "../../repos/orderRepo"
import { Link, Route, Redirect } from "react-router-dom"
import { Order } from "./order"
import "./account.css"

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
        <img className="image" src="https://i.pinimg.com/736x/45/b6/a6/45b6a656f168af37c2cebfd29ed7339d--fb-cover-photos-cover-picture.jpg" alt="lights" />
        <h2>My Account</h2>
        <section className="box">
            <div className="info">
                Name: {user.name}
            </div>
            <div className="info">
                Address: {user.address}
            </div>
            <div className="info">
                Email: {user.email}
            </div>
        <div>   
            Phone number: {user.phone}
        </div>
        </section>
        <div className="update">
        <Link className="update__link" to="/account/form">Need to update your info?</Link>
        </div>
        <h2>My Orders</h2>
        <section className="orders" >
        <div className="order">
            {orders.map(o => <Order className="order" key={o.id} order={o} />)}
        </div>
        </section>
        </>
    )}
    else {
        return <Redirect to="/login" />;
      }
}   
