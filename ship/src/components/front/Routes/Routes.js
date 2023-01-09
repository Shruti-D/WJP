import React from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Bookings from '../Bookings/Bookings';
import Abc from '../Abc/Abc';
import { Route, Switch } from 'react-router-dom';



const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/bookings" exact>
                    <Bookings />
                </Route>
                <Route path="/abc" exact>
                    <Abc />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;