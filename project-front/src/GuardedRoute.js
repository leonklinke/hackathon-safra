import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";


const GuardedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default GuardedRoute;