import React, { PureComponent } from 'react';
import 'boxicons'
import DashboardLeaveCardSkeleton from './DashboardLeaveCardSkeleton';

class DashboardLeaveCard extends PureComponent {

    render() {


        if (this.props.loading) {
            return (
                <DashboardLeaveCardSkeleton></DashboardLeaveCardSkeleton>
            )
        }
        else {
            return (
                <>
                    <li className="card card-item" aria-label="Annual Leave Card">
                        <div className="row">
                            <dl className="col mb-07">
                                <dt className="leave-name">{this.props.leave_name}</dt>
                                <dd className="remaining-days">{this.props.available_days} days remaining</dd>
                            </dl>
                            <dl className="col dashboard-header-icon col-auto">
                                <dt>
                                    <img className="dashboard-header-icon-img" alt="leave icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsUlEQVRIS+1W2w2DMBCzJ+gIpZt0FDpZO0pHgQ26gVGQqEq4cApRUIXIX3QPx/cMUfmwsn+sAkhSeABJU8+Tj7ZrDDwHnnwBIOkO4Amg2Ri6DsCD5HuynzGQFBSuG51PZh3JWwpgjHnp+c1ZzGAfgFTVeMyspJsMjgMQU869W30w69xch2cOkBuyMweLxv6LKvoAuHgzx5H3JL/7JJ5FYeG8CnZCD6BNLpzCl5vm1X8VA1x0vhl4BpJ2AAAAAElFTkSuQmCC" />
                                </dt>
                            </dl>
                        </div>
                        <small className="mute-text">{this.props.used_days} out of {parseInt(this.props.available_days) + parseInt(this.props.used_days)} days used </small>
                    </li>
                </>
            );
        }
    }
}

export default DashboardLeaveCard;