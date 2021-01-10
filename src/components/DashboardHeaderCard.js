import React, { Component } from 'react';
import styled from 'styled-components';
import DashboardHeaderCardSkeleton from './DashboardHeaderCardSkeleton';
import Skeleton from './LoadingSkeleton';

class DashboardHeaderCard extends Component {

    constructor(props){
        super(props);
        this.welcome = React.createRef();
    }

    componentDidUpdate=()=>{
        this.welcome.current.focus();
    }

    render() {

        if (this.props.loading) {
            return (
               <DashboardHeaderCardSkeleton></DashboardHeaderCardSkeleton>
            );
        }
        else {
            return (
                <>
                    <div className="card" ref={this.welcome} >
                        <div className="row">
                            <div className="col">
                                <h1 >Welcome , {this.props.full_name}</h1>
                                <small>{this.props.daily_quote}</small>
                            </div>
                            <div className="col-auto align-self-center">
                                <box-icon name='info-circle' color="#e84895"></box-icon>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

    }
}

export default DashboardHeaderCard;