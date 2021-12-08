import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./treeFarm.css";

export const TreeFarm = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("farm_user")) {
          return (
            <>
              <NavBar />
              <h1>Tree Farm</h1>
              <ApplicationViews />

            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);