import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/locationList"
import { HomePage } from "./homePage"
import { OrderPage } from "./orders/orderPage"
import { AccountPage } from "./account/account"
import LocationExpand from "./locations/LocationExpand"
import { AccountForm } from "./account/updateAcct"
import OrderExpand from "./account/OrderExpand"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route path="/locations/:locationId(\d+)">
                <LocationExpand />
            </Route>
            <Route exact path="/orders">
                <OrderPage />
            </Route>
            <Route exact path="/account">
                <AccountPage />
            </Route>
            <Route path="/account/form">
                <AccountForm />
            </Route>
            <Route path="/account/:orderId(\d+)">
                <OrderExpand />
            </Route>
        </>
    )
}