import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';

class Sidebar extends Component {
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
                    {/* <Link to="/logout" >Logout</Link> */}
                    <button onClick={}>Sign Out</button>
                </aside>
            </>
        );
    }
}

export default Sidebar;