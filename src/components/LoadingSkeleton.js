import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SkeletonPulse = styled.div`
    display: inline-block;
    width:100%;
    height:100%;
    background : linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
    background-size:400% 400%;
    animation : pulse 1.2s ease-in infinite;
    border-radius : 1rem;

    @keyframes pulse{
        0% {
            background-position : 0% 0%;
        }

        100% {
            background-position : -140% 0%;
        }
    }
`

function Skeleton(props) {
    return (
        <SkeletonPulse></SkeletonPulse>
    );
}

export default Skeleton;