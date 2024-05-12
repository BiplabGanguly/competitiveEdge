import React from 'react'
import "../Css/admindashboardStyle.css";
import AdminDashboardInfobox from '../components/AdminDashboardInfobox';


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
                <AdminDashboardInfobox heading="Branches" infonumber="07" infodata="There are 07 Branches present"/>
                </div>
                <div className='col-md-4 faculty-div'>
                <AdminDashboardInfobox heading="Faculty" infonumber="07" infodata="There are 07 Branches present"/>

                </div>
                <div className='col-md-4 student-div'>
                <AdminDashboardInfobox heading="Student" infonumber="07" infodata="There are 07 Branches present"/>
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