import React from 'react';
import PropTypes from 'prop-types';
import TableSkeleton from './TableSkeleton';
import React, { Component } from 'react';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            dataSource: []
        };
    }

    getTableHeaderColumns = (column_array) => {
        this.setState({ columns: column_array });
    }

    getTableDataSource = (data_source) => {
        this.setState({ dataSource: data_source });
    }

    componentDidMount() {
        this.getTableHeaderColumns(this.props.columns);
        this.getTableDataSource(this.props.dataSource);
    }

    render() {
        return (
            <>
                {this.props.loading ? <TableSkeleton></TableSkeleton> :
                    <div>
                        <div className="table-responsive">
                            <table className="table table-header">
                                <thead>
                                    <tr>
                                        {
                                            this.state.columns.map((column, index) => {
                                                <th key={index}>{column.label}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-body">
                                <tbody>
                                    {
                                        this.state.dataSource.map((item, index) => {
                                            <tr key={index}>
                                                {
                                                    this.state.columns.map((column, i) => {
                                                        <td>
                                                            
                                                        </td>

                                                    })
                                                }
                                            </tr>

                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default Table;