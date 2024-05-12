import React from 'react'

function AdminDashboardInfobox(props) {
    return (
        <div className='admin-dashboard-info-box'>
            {props.heading}
            {props.infonumber}
            {props.infodata}
            
        </div>
    )
}

export default AdminDashboardInfobox