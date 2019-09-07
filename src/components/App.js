import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/Abount";
import Header from "./common/Header"
import PageNotFound from "./common/PageNotFound";
import Courses from "./Courses/Courses";
import ManageCoursePage from "./Courses/ManageCoursePage";

const App = () => (
    <div className="container-fluid">
        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/courses" component={Courses}></Route>
            <Route path="/course:slug" component={ManageCoursePage}></Route>
            <Route path="/course" component={ManageCoursePage}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
    </div>
)

export default App;