import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import UserLanding from "./Components/UserLanding/UserLanding";
import UserProfile from "./Components/UserProfile/UserProfile";
import Posts from "./Components/Posts/Posts";

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Register} path="/register" />
        <Route component={UserLanding} path="/user"/>
        <Route component={UserProfile} path="/myprofile" />
        <Route component={Posts} path="/posts"/>
    </Switch>
);