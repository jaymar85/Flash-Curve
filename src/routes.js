import React from "react";
import {Switch, Route} from "react-router-dom";
// Components
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import UserLanding from "./Components/UserLanding/UserLanding";
import UserProfile from "./Components/UserProfile/UserProfile";
import CreateNewTopic from "./Components/CreateNewTopic/CreateNewTopic";
import TopicCards from "./Components/TopicCards/TopicCards";
import StudyCases from "./Components/StudyCases/StudyCases"

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Register} path="/register" />
        <Route component={UserProfile} path="user/profile" />
        <Route component={UserLanding} path="/user" />
        <Route component={TopicCards} path='/topics/:topic_id' />
        <Route component={CreateNewTopic} path='/create' />
        <Route component={StudyCases} path='/topics' />
    </Switch>
);



