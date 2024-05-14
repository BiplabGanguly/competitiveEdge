import React from 'react'

export default function AdminDashboardTable() {
  return (
    <div className='row'>
      <div className='table-responsive'>
                    <table className='table table-bordered table-striped table-hover'>
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
  )
}
