import './App.css';
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NetworkDetector from './components/NetworkDetector'
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Router>
      </AuthProvider>
    </>
  );
}

export default NetworkDetector(App);
