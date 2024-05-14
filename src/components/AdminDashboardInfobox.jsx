import React from 'react'

function AdminDashboardInfobox(props) {
    return (
        <div className='admin-dashboard-info-box'>
            <div className='row center-div-heading-content'>
                {props.heading}
            </div>
            <div className='row center-div-infonumber-content'>
                {props.infonumber}
            </div>
            <div className='row center-div-infodata-content'>
                {props.infodata}
            </div>

        </div>
    )
}

export default AdminDashboardInfobox