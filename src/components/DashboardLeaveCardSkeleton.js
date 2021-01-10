import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from './LoadingSkeleton';

const LeaveType = styled.div`
    width : 200px;
    height: 20px;
    margin-bottom: 10px;
`

const AvailableDays = styled.div`
    width : 250px;
    height: 20px;
    margin-bottom: 5px;
`

const UsedDays = styled.div`
    width : 300px;
    height: 10px;
`

const LeaveIcon = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius : 1rem;
`

function DashboardLeaveCardSkeleton(props) {
    return (
        <div className="card card-item" aria-label="Annual Leave Card">
            <div className="row">
                <div className="col mb-07">
                    <LeaveType><Skeleton></Skeleton></LeaveType>
                    <AvailableDays><Skeleton></Skeleton></AvailableDays>
                </div>
                <div className="col col-auto">
                    <LeaveIcon><Skeleton></Skeleton></LeaveIcon>
                </div>
            </div>
            <UsedDays><Skeleton></Skeleton></UsedDays>
        </div>
    );
}

export default DashboardLeaveCardSkeleton;