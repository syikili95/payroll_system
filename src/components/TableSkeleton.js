import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from './LoadingSkeleton';

const TableHeader = styled.td`
    height:10px;
    width: 100px;
`

function TableSkeleton(props) {
    return (
        <div>
            <table  className="table">
                <thead>
                    <tr>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                    </tr>
                    <tr>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                    </tr>
                    <tr>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                    </tr>
                    <tr>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                        <TableHeader><Skeleton></Skeleton></TableHeader>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default TableSkeleton;