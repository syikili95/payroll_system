import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from '../components/Auth';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
const Dashboard = lazy(() => import('./Dashboard'));
const Claims = lazy(() => import('./Claims'));

class Home extends Component {

    static contextType = AuthContext;

    constructor(props){
        super(props);
        this.state = {
            email : ""
        };
    }

    componentDidMount() {
        this.setState({
            email : this.context.currentUser.email
        });
    }
    render() {

        return (
            <>
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
            </>
        );
    }
}

export default Home;