import React, { Component , useCallback } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Skeleton from '../components/LoadingSkeleton';
import TableSkeleton from '../components/TableSkeleton';
import axios from 'axios';

const ContentCardTitle = styled.div`
    width: 300px;
    height:25px;
    margin-left: 10px;
`

const ContentCardIcon = styled.div`
    width: 25px;
    height:25px;
    border-radius : 1rem;
`

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claims_options: [
                { value: 1, label: "All Claims" },
                { value: 2, label: "Pending" },
                { value: 3, label: "Approve" },
                { value: 4, label: "Paid" },
                { value: 5, label: "Rejected" },
            ],
            people_on_leave_option: [
                { value: 1, label: "Today" },
                { value: 2, label: "This week" },
                { value: 3, label: "Next Week" },
                { value: 4, label: "This month" },
            ],
            claims: [],
            people_on_leave: [],
            my_leave: [],
            loading: true,
            people_on_leave1: [],
            imageLoading: true,
            requestError: false
        };
    }

    getLeaveType = (type) => {
        switch (type) {
            case 1:
                return "Paternity Leave";
            case 2:
                return "Annual Leave";
            case 3:
                return "Carty Forward";
        }
    }

    getDashboardDetails = () => {
        let dashboard_details =
        {
            claims: [
                {
                    application_date: "04-10-2020 12:23:45",
                    transaction_date: "04-10-2020 12:23:45",
                    amount: "11.20",
                    category: "4", //define claim types
                    status: 1  //true/false
                },
                {
                    application_date: "04-10-2020 12:23:45",
                    transaction_date: "04-10-2020 12:23:45",
                    amount: "11.20",
                    category: "4", //define claim types
                    status: 3  //true/false
                },
                {
                    application_date: "04-10-2020 12:23:45",
                    transaction_date: "04-10-2020 12:23:45",
                    amount: "11.20",
                    category: "4", //define claim types
                    status: 2  //true/false
                },
                {
                    application_date: "04-10-2020 12:23:45",
                    transaction_date: "04-10-2020 12:23:45",
                    amount: "11.20",
                    category: "4", //define claim types
                    status: 1  //true/false
                },
                {
                    application_date: "04-10-2020 12:23:45",
                    transaction_date: "04-10-2020 12:23:45",
                    amount: "11.20",
                    category: "4", //define claim types
                    status: 1  //true/false
                },
            ],
            people_on_leave: [
                {
                    user_id: "2030",
                    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fwoman%2Bface&psig=AOvVaw3WzAdBpcjr0YrAaZE0RNh_&ust=1610134014576000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDipuTGiu4CFQAAAAAdAAAAABAD",
                    name: "Low Xi Ying",
                    date: "23-10-2020 12:23:!2"
                },
                {
                    user_id: "2031",
                    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fman%2Bface&psig=AOvVaw3WzAdBpcjr0YrAaZE0RNh_&ust=1610134014576000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDipuTGiu4CFQAAAAAdAAAAABAJ",
                    name: "Samantha Brookes",
                    date: "23-10-2020 12:23:!2"
                },
                {
                    user_id: "2032",
                    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F395402042264924542%2F&psig=AOvVaw3WzAdBpcjr0YrAaZE0RNh_&ust=1610134014576000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDipuTGiu4CFQAAAAAdAAAAABAO",
                    name: "Kamal bin Zamuri",
                    date: "23-10-2020 12:23:!2"
                },
                {
                    user_id: "2034",
                    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fface.html&psig=AOvVaw3WzAdBpcjr0YrAaZE0RNh_&ust=1610134014576000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDipuTGiu4CFQAAAAAdAAAAABAU",
                    name: "Subramaniam a/l Joshua",
                    date: "23-10-2020 12:23:!2"
                },
            ],
            leaves_items: [
                {
                    name: "Annual Leave",
                    available_days: "12",
                    used_days: "4",
                    type: "annual_leave"
                },
                {
                    name: "Carry Forward Leave",
                    available_days: "5",
                    used_days: "0",
                    type: "carry_forward_leave"
                },
                {
                    name: "Birthday Leave",
                    available_days: "1",
                    used_days: "0",
                    type: "birthday_leave"
                },
                {
                    name: "Compassionate Leave",
                    available_days: "7",
                    used_days: "5",
                    type: "compassionate_leave"
                },
                {
                    name: "Examination Leave",
                    available_days: "3",
                    used_days: "0",
                    type: "examination_leave"
                },
                {
                    name: "Hospitalization Leave",
                    available_days: "30",
                    used_days: "9",
                    type: "hospitalization_leave"
                },
                {
                    name: "Marriage Leave",
                    available_days: "5",
                    used_days: "0",
                    type: "marriage_leave"
                },
                {
                    name: "Maternity Leave",
                    available_days: "60",
                    used_days: "0",
                    type: "maternity_leave"
                },
                {
                    name: "Sick Leave",
                    available_days: "18",
                    used_days: "0",
                    type: "sick_leave"
                },
                {
                    name: "Unpaid Leave",
                    available_days: "30",
                    used_days: "0",
                    type: "unpaid_leave"
                },
            ],
            leave_history: [
                {
                    applied_date: "20-02-2020",
                    range: "23-02-2020 - 25-02-2020",
                    leave_type: 1,
                    status: 1
                },
                {
                    applied_date: "20-02-2020",
                    range: "23-02-2020 - 25-02-2020",
                    leave_type: 2,
                    status: 2
                },
                {
                    applied_date: "20-02-2020",
                    range: "23-02-2020 - 25-02-2020",
                    leave_type: 2,
                    status: 3
                },
                {
                    applied_date: "20-02-2020",
                    range: "23-02-2020 - 25-02-2020",
                    leave_type: 1,
                    status: 3
                },
                {
                    applied_date: "20-02-2020",
                    range: "23-02-2020 - 25-02-2020",
                    leave_type: 1,
                    status: 3
                },
            ],
            full_name: "Nurasyikin binti Zulkaflli",
            daily_quote: "'You're not obligated to win. You're obligated to keep trying to do the best you can every day.' - Marian Edelman",
        };

        return dashboard_details;
    }

    getData = async event => {

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
            return res.data.results
        });

        this.setState({
            people_on_leave1: response
        });
    }

    componentDidMount() {
        let data = this.getDashboardDetails();
        this.getData();
        this.setState({
            claims: data.claims,
            people_on_leave: data.people_on_leave,
            my_leave: data.leaves_items,
            leave_history: data.leave_history,
            full_name: data.full_name,
            daily_quote: data.daily_quote,
            loading: false
        });
    }

    componentDidUpdate = () => {
    }

    getCardTitle = (type) => {
        let title;  //declare data type
        switch (type) {
            case "claims":
                return "My Claims";
            case "people_on_leave":
                return "People on Leave";
            case "my_leave":
                return "My Leaves";
        }
    }

    getTableColumns = (type) => {

        let columns;

        switch (type) {
            case "claims":
                columns = ["Application Date", "Transaction Date", "Amount", "Category", "Status"];
                break;
            case "people_on_leave":
                columns = ["", "Name", "Date"];
                break;
            case "my_leave":
                columns = ["Applied", "Details", "Status"];
                break;
        }

        return columns;

    }

    getCardFooterLinkDetails = (type) => {

        let data = {};

        switch (type) {
            case "claims":
                data['description'] = "Claim Page";
                data['link'] = "/claims";
                break;
            case "people_on_leave":
            case "my_leave":
                data['description'] = "Leaves Page";
                data['link'] = "/leaves";
                break;
        }

        return data;

    }

    getClaimsCategory = (type) => {
        switch (type) {
            case "1":
                return "Food";
            case "2":
                return "Accommedation";
            case "3":
                return "Entertinment";
            case "4":
                return "Mileage";
        }
    }

    getClaimsStatus = (type) => {
        let claims_status = {};
        switch (type) {
            case 1:
                claims_status['description'] = "Pending";
                claims_status['class'] = "status-pending";
                break;
            case 2:
                claims_status['description'] = "Rejected";
                claims_status['class'] = "status-rejected";
                break;
            case 3:
                claims_status['description'] = "Approved";
                claims_status['class'] = "status-approved";
                break;
        }

        return claims_status;
    }

    loadContentTitle = () => {
        return <div className="d-inline-flex">
            <ContentCardIcon><Skeleton></Skeleton></ContentCardIcon>
            <ContentCardTitle><Skeleton></Skeleton></ContentCardTitle>
        </div>
    }

    onErrorLoadImage = (event) => {

        try{
            this.setState({ requestError: true }) 
        }
        catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <DashboardHeader
                    full_name={this.state.full_name}
                    daily_quote={this.state.daily_quote}
                    leaves_items={this.state.my_leave}
                    loading={this.state.loading}
                ></DashboardHeader>
                <section className="dashboard-content">
                    {
                        (this.state.claims.length == 0 ?
                            null :
                            <article className="card" aria-label="My Claims">
                                <div className="row align-items-center">
                                    {this.state.loading ? this.loadContentTitle() :
                                        <div className="d-inline-flex">
                                            <box-icon name='money' ></box-icon>
                                            <h2 className="m-0 dashboard-card-title">{this.getCardTitle('claims')}</h2>
                                        </div>
                                    }
                                    {this.state.loading ? null :
                                        <div className="ml-auto dashboard-card-filter">
                                            <Select options={this.state.claims_options}></Select>
                                        </div>
                                    }
                                </div>

                                {(this.state.loading ? <TableSkeleton></TableSkeleton> :
                                    <div>
                                        <div className="table-responsive">
                                            <table className="table table-header">
                                                <thead>
                                                    <tr>
                                                        {
                                                            this.getTableColumns('claims').map((item, index) => (
                                                                <th key={index}>{item}</th>
                                                            ))
                                                        }
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <div className="table-responsive dashboard-middle-card">
                                            <table className="table table-body">
                                                <tbody>
                                                    {
                                                        this.state.claims.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.application_date}</td>
                                                                <td>{item.transaction_date}</td>
                                                                <td>RM{item.amount}</td>
                                                                <td>{this.getClaimsCategory(item.category)}</td>
                                                                <td className={this.getClaimsStatus(item.status)['class']}><b>{this.getClaimsStatus(item.status)['description']}</b></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>

                                )}

                                {this.state.loading ? null :
                                    <div className="dashboard-card-footer-link">
                                        <Link to={this.getCardFooterLinkDetails('claims')['link']}>View more on {this.getCardFooterLinkDetails('claims')['description']}</Link>
                                    </div>
                                }
                            </article>
                        )
                    }
                    {
                        (this.state.people_on_leave.length == 0 ?
                            null :
                            <article className="card mb-1" aria-label="People on Leave">
                                <div className="row align-items-center">
                                    {this.state.loading ? this.loadContentTitle() :
                                        <div className="d-inline-flex">
                                            <box-icon name='user'></box-icon>
                                            <h2 className="m-0 dashboard-card-title">{this.getCardTitle('people_on_leave')}</h2>
                                        </div>
                                    }
                                    {this.state.loading ? null :
                                        <div className="ml-auto dashboard-card-filter">
                                            <Select options={this.state.people_on_leave_option}></Select>
                                        </div>
                                    }
                                </div>

                                {(this.state.loading ? <TableSkeleton></TableSkeleton> :
                                    <div>
                                        <div className="table-responsive">
                                            <table className="table table-header">
                                                <thead>
                                                    <tr>
                                                        {
                                                            this.getTableColumns('people_on_leave').map((item, index) => (
                                                                <th key={index}>{item}</th>
                                                            ))
                                                        }
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <div className="table-responsive dashboard-middle-card">
                                            <table className="table table-body">
                                                <tbody>
                                                    {
                                                        (this.state.people_on_leave1.length == 0 ? null :

                                                            this.state.people_on_leave1.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {
                                                                            (this.state.imageLoading ? <ContentCardIcon><Skeleton></Skeleton></ContentCardIcon> : null)
                                                                        }
                                                                        <img
                                                                            width="30"
                                                                            src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index + 1}.png?raw=true`}
                                                                            alt={item.name}
                                                                            onLoad={() => { this.setState({ imageLoading: false }) }}
                                                                            // onError={this.onErrorLoadImage()}
                                                                            style={(this.state.imageLoading ? { display: "none" } : { display: "block" })}
                                                                        >
                                                                        </img>
                                                                    </td>
                                                                    <td className="text-capitalize">{item.name}</td>
                                                                    <td>24/12/2020</td>
                                                                </tr>
                                                            ))
                                                        )

                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                )}

                                {this.state.loading ? null :
                                    <div className="dashboard-card-footer-link">
                                        <Link to={this.getCardFooterLinkDetails('people_on_leave')['link']}>View more on {this.getCardFooterLinkDetails('people_on_leave')['description']}</Link>
                                    </div>
                                }
                            </article>
                        )
                    }
                    {
                        (this.state.people_on_leave.length == 0 ?
                            null :
                            <article className="card mb-1" aria-label="My Leaves History">
                                <div className="row align-items-center">
                                    {this.state.loading ? this.loadContentTitle() :
                                        <div className="d-inline-flex">
                                            <box-icon name='history' ></box-icon>
                                            <h2 className="m-0 dashboard-card-title">{this.getCardTitle('my_leave')}</h2>
                                        </div>
                                    }
                                    {this.state.loading ? null :
                                        <div className="ml-auto dashboard-card-filter">
                                        </div>
                                    }
                                </div>

                                {(this.state.loading ? <TableSkeleton></TableSkeleton> :
                                    <div>
                                        <div className="table-responsize">
                                            <table className="table table-header">
                                                <thead>
                                                    <tr>
                                                        {
                                                            this.getTableColumns('my_leave').map((item, index) => (
                                                                <th key={index}>{item}</th>
                                                            ))
                                                        }
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <div className="table-responsive dashboard-middle-card">
                                            <table className="table table-body">
                                                <tbody>
                                                    {
                                                        this.state.leave_history.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.applied_date}</td>
                                                                <td className="my-leave-type">
                                                                    <span>{item.range}</span>
                                                                    <p><span className={this.getLeaveType(item.status)}>{this.getLeaveType(item.status)}</span></p>
                                                                </td>
                                                                <td className={this.getClaimsStatus(item.status)['class']}>
                                                                    <b>{this.getClaimsStatus(item.status)['description']}</b>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                )}

                                {this.state.loading ? null :
                                    <div className="dashboard-card-footer-link">
                                        <Link to={this.getCardFooterLinkDetails('my_leave')['link']}>View more on {this.getCardFooterLinkDetails('my_leave')['description']}</Link>
                                    </div>
                                }

                            </article>
                        )
                    }
                </section>
            </>
        );
    }
}

export default Dashboard;