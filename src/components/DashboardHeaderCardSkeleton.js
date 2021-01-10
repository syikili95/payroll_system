import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from './LoadingSkeleton';

const DashboardHeaderIntro = styled.div`
    width : 500px;
    height:30px;
    margin-bottom : 5px;
`

const DashboardHeaderIntroQuote = styled.div`
    width : 1000px;
    height: 15px;
`

function DashboardHeaderCardSkeleton(props) {
    return (
        <div className="card">
            <DashboardHeaderIntro><Skeleton></Skeleton></DashboardHeaderIntro>
            <DashboardHeaderIntroQuote><Skeleton></Skeleton></DashboardHeaderIntroQuote>
        </div>
    );
}

export default DashboardHeaderCardSkeleton;