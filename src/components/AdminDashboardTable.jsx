import React from 'react'

function AdminDashboardTable(props) {
    console.log(props.tabledata)
    const tableDataArray = props.tabledata && typeof props.tabledata === 'object'
        ? Object.values(props.tabledata)
        : [];
    return (
        <div className='row'>
            <div className='table-responsive'>
                <table className='table table-bordered table-striped table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Faculty Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataArray.length > 0 ? (
                            tableDataArray.map((data, index) => (
                                <tr key={index}>
                                    <td>{`sn220${data.user.id}h`}</td>
                                    <td>{`${data.user.first_name} ${data.user.last_name}`}</td>
                                    <td>{data.user.email}</td>
                                    <td>{data.profile}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default AdminDashboardTable;
