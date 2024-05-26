import React from 'react'

function AdminDashboardTable(props) {
    console.log(props.tabledata)
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
                        {props.tabledata && props.tabledata.faculty_details && props.tabledata.faculty_details.length > 0 && (
                            <tr>
                                <td>sn220{props.tabledata.faculty_details[0].user.id}h</td>
                                <td>{`${props.tabledata.faculty_details[0].user.first_name} ${props.tabledata.faculty_details[0].user.last_name}`}</td>
                                <td>{props.tabledata.faculty_details[0].user.email}</td>
                                <td>{props.tabledata.faculty_details[0].profile}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default AdminDashboardTable;
