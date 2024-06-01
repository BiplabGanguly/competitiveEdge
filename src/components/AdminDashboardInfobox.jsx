import React from 'react'

function AdminDashboardInfobox(props) {
    return (
        <div className='container admin-dashboard-info-box'>
            <div className='row center-div-heading-content'>
                <span className='admin-data-branches'>{props.heading}
                </span>          </div>
            <div className='row center-div-infonumber-content'>
                <span className='admin-data-infonumber'>{props.infonumber}</span>
            </div>
            <div className='row center-div-infodata-content'>
                <span className='admin-data-info'>{props.infodata}
                </span>           </div>

        </div>
    )
}

export default AdminDashboardInfobox