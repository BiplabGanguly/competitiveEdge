import React from 'react'
import "../Css/admindashboardStyle.css";


function AdminDashboard() {
    return (
        <div className='container'>
            <div className='row button-control'>
                <div className='col-6'></div>

                <div className='col-3 branch-button-control'>
                    <button type='submit' className='btn-home'>Branch</button>
                </div>
                <div className='col-3'>
                    <button type='submit' className='btn-home'>Permission</button>
                </div>
            </div>
            <div className='row center-content'>
                <div className='col-4 branch-div'>
                    Branches
                </div>
                <div className='col-4 faculty-div'>
                    Faculty
                </div>
                <div className='col-4 student-div'>
                    Student
                </div>
            </div>
            <div className='row'> 
            <div className='col-12 other-content'>
                kjhafliejoljefkjdsf
            </div>
            </div>
        </div>
    )
}

export default AdminDashboard