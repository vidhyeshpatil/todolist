import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";

const MyRoutes = [
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/home",
        component: HomePage
    }
]

const Routes = () => {
    const MyRoute = MyRoutes.map((curr, i) => (
        <Route key = {i} path = {curr.path} component = {curr.component} />
    ));

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from = "/" to = "/login" />
                {MyRoute}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;