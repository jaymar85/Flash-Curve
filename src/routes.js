import React from "react";
import {Switch, Route} from "react-router-dom";
// Components
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import UserLanding from "./Components/UserLanding/UserLanding";
import UserProfile from "./Components/UserProfile/UserProfile";
import Posts from "./Components/Posts/Posts";

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Register} path="/register" />
        <Route path="/user" render={() => (
            <UserLanding>
                <Route component={UserProfile} path="/profile" />
                <Route component={Posts} path="/posts"/>
            </UserLanding>
        )} />
    </Switch>
);