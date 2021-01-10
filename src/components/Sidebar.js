import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { AuthContext } from './Auth';
import firebaseConfig from './Firebase';

class Sidebar extends Component {

    static  contextType = AuthContext;

    constructor(props){
        super(props);
        this.state = {
            currentUser : {}
        }
    }

    componentDidMount(){
        this.setState({
            currentUser :  this.context.currentUser
        });

        debugger;
    }
    render() {
        return (
            <>
                <aside className="sidebar">
                    <Link to="/" className="sidebar-header">TimeLog</Link>
                    <Link to="/" >Dashboard</Link>
                    <Link to="/users" >Users</Link>
                    <Link to="/leave" >Leave</Link>
                    <Link to="/benefits" >Benefits</Link>
                    <Link to="/insurance" >Insurance</Link>
                    <Link to="/payroll" >Payroll</Link>
                    <Link to="/claims" >Claims</Link>
                    <Link to="/account" >My Account</Link>
                    <Link onClick={()=> {firebaseConfig.auth().signOut()}}>Sign Out</Link>
                </aside>
            </>
        );
    }
}

export default Sidebar;