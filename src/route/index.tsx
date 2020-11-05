import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from '../Screens/Dashboard';
import Login from '../Screens/Login/Login';

export enum ROUTE_PATHS {
    LOGIN = '/',
    DASHBOARD = '/dashboard',
}

function RouteStack() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTE_PATHS.LOGIN}>
                    <Login />
                </Route>
                <Route path={ROUTE_PATHS.DASHBOARD}>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default React.memo(RouteStack);
