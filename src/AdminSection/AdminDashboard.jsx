import React from "react";
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
                    <AdminDashboardInfobox heading="Branches" infonumber="07" infodata="There are 07 Branches present" />
                </div>
                <div className='col-md-4 faculty-div'>
                    <AdminDashboardInfobox heading="Faculty" infonumber="07" infodata="There are 07 Branches present" />

                </div>
                <div className='col-md-4 student-div'>
                    <AdminDashboardInfobox heading="Student" infonumber="07" infodata="There are 07 Branches present" />
                </div>
            </div>
            <div className='row mt-5'>
                <div className='table-responsive'>
                    <table className='table table-bordered table-striped table-hover table-sm'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Faculty Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Branch</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Abhi</td>
                                <td>abhi783@gmail.com</td>
                                <td>MCA</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>bapan</td>
                                <td>bapan3783@gmail.com</td>
                                <td>MBA</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Biplab</td>
                                <td>bip3783@gmail.com</td>
                                <td>B-tech</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Tamal</td>
                                <td>tamsld3783@gmail.com</td>
                                <td>BBA</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Ram</td>
                                <td>ram73847@gmail.com</td>
                                <td>M-tech</td>
                                <td>Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;
