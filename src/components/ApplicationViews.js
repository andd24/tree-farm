import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/locationList"
import { HomePage } from "./homePage"
import { OrderPage } from "./orders/orderPage"
import { AccountPage } from "./account/account"
import LocationExpand from "./locations/LocationExpand"


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
            <Route path="/orders">
                <OrderPage />
            </Route>
            <Route path="/account">
                <AccountPage />
            </Route>
        </>
    )
}