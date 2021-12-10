import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/locationList"
import { HomePage } from "./homePage"
import { OrderPage } from "./orders/orderPage"
import { AccountPage } from "./account/account"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/orders">
                <OrderPage />
            </Route>
            <Route path="account/:userId(\d+)">
                <AccountPage />
            </Route>
        </>
    )
}