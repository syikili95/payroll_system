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
// import Dashboard from './views/Dashboard';
// import Claims from './views/Claims';
const Dashboard = lazy(() => import('./views/Dashboard'));
const Claims = lazy(() => import('./views/Claims'));

function App() {
  return (
    <>
      {/* <Router>
        <Sidebar></Sidebar>
        <Modal></Modal>
        <Switch>
          <div className="main-content">
            <Suspense fallback={<Loader></Loader>}>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/claims" component={Claims}></Route>
            </Suspense>
          </div>
        </Switch>
      </Router> */}
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default NetworkDetector(App);
