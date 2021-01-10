import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import React, { Suspense, lazy } from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Loader';
import NetworkDetector from './components/NetworkDetector'
import Modal from './components/Modal';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './views/Dashboard';
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
