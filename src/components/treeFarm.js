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
            <section class="title"> 
              <img src="https://www.nicepng.com/png/detail/111-1118713_pdbottom-paint-fir-tree-silhouette.png" height="50" width="75" />
              <h1>Tree Farm</h1>
            </section>  
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