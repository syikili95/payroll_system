import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './Auth';
import { Redirect, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Home from '../views/Home';

const PrivateRoute = (({component : RouteComponent , ...rest}) => {

    const {currentUser} = useContext(AuthContext);

    return (
        //Why this doesnt work??
        // <Route {...rest}   render={routeProps => {
        //     debugger;
        //     !!currentUser ? (<RouteComponent ></RouteComponent> ) : 
        //     (<Redirect to="/signin"></Redirect>)
        // }}>
          
        // </Route>

        <>
        {
            (currentUser) ? <Home {...rest}></Home> : <Redirect to="/signin"></Redirect>
        }
        </>
    )

})

export default PrivateRoute;