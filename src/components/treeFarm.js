import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./treeFarm.css";

export const TreeFarm = () => (
  <>
    <Route
      render={() => {
        // if (localStorage.getItem("farm_user")) {
          return (
            <>
              <NavBar /> 
              <ApplicationViews />
            
            </>
          );
      //   } else {
      //     return <Redirect to="/login" />;
      //   }
      // }
    }} />

    {/* <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route> */}
  </>
);

// https://www.nicepng.com/png/detail/111-1118713_pdbottom-paint-fir-tree-silhouette.png
