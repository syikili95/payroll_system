import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DashboardLeaveCard from './DashboardLeaveCard';
import DashboardHeaderCard from './DashboardHeaderCard';
import Skeleton from './LoadingSkeleton';
import styled from 'styled-components';

class DashboardHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dashboard_leave_card: []
        };
    }

    componentDidMount =()=>{
    
    }
    componentDidUpdate =()=>{
    }
    getIconSRC = (type) => {

        let src = {};

        switch (type) {
            case 'annual_leave':
                src['icon'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsUlEQVRIS+1W2w2DMBCzJ+gIpZt0FDpZO0pHgQ26gVGQqEq4cApRUIXIX3QPx/cMUfmwsn+sAkhSeABJU8+Tj7ZrDDwHnnwBIOkO4Amg2Ri6DsCD5HuynzGQFBSuG51PZh3JWwpgjHnp+c1ZzGAfgFTVeMyspJsMjgMQU869W30w69xch2cOkBuyMweLxv6LKvoAuHgzx5H3JL/7JJ5FYeG8CnZCD6BNLpzCl5vm1X8VA1x0vhl4BpJ2AAAAAElFTkSuQmCC";
                src['bg-color'] = "bg-";
                break;
        }

        return src;

    }

    populateDashboardLeaveCard = () => {

        let card = [];

        if (this.props.loading) {

            for (let i = 0; i < 3; i++) {
                card.push((<DashboardLeaveCard key={i}></DashboardLeaveCard>));
            }

            return card;

        }
        else {
            return this.props.leaves_items.map((leave, index) => (
                <DashboardLeaveCard
                    leave_name={leave.name}
                    available_days={leave.available_days}
                    used_days={leave.used_days}
                    loading={this.props.loading}
                    key={index}></DashboardLeaveCard>
            ))
        }

    }

    render() {
        return (
            <>
                <section aria-label="Dashboard Header Intro" className="dashboard-header-intro">
                    <DashboardHeaderCard
                        full_name={this.props.full_name}
                        daily_quote={this.props.daily_quote}
                        loading={this.props.loading}
                    ></DashboardHeaderCard>
                </section>
                <section  aria-label="Dashboard Header">
                    <ul className="dashboard-header">
                    {this.populateDashboardLeaveCard()}
                    </ul>
                </section>
            </>
        );
    }
}

export default DashboardHeader;