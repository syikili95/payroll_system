import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './Auth';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (({component : RouteComponent , ...rest}) => {

    const {currentUser} = useContext(AuthContext);

    return (
        <Route>
            {...rest}
            render={routeProps => {
                !!currentUser ? (<RouteComponent {...routeProps}></RouteComponent> ) : 
                (<Redirect to="/signin"></Redirect>)
            }}
        </Route>
    )

})

export default PrivateRoute;