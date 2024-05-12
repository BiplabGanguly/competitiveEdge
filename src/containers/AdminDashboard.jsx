import React from 'react'
import "../Css/admindashboardStyle.css";


function AdminDashboard() {
    return (
        <div className='container'>
            <div className='row upper-content'>
                <div className='col-md-3 admin-branch-button offset-md-6'>
                    <button type='submit' className='btn btn-success'>Branch</button>
                </div>
                <div className='col-md-3'>
                    <button type='submit' className='btn btn-success'>Permission<span>05</span></button>
                </div>
            </div>
            <div className='row center-content'>
                <div className='col-md-4 branch-div'>
                <div className='admin-dashboard-info-box'>
                    Branches
                    07
                    There are 07 Branches present
                    </div>
                </div>
                <div className='col-md-4 faculty-div'>
                <div className='admin-dashboard-info-box'>
                    Faculty
                </div>
                </div>
                <div className='col-md-4 student-div'>
                <div className='admin-dashboard-info-box'>
                    Student
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 other-content'>
                    kjhafliejoljefkjdsf
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard