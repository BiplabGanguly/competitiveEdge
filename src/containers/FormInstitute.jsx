import React from 'react'
import "../Css/forminstituteStyle.css";
import { Link } from 'react-router-dom';


function FormInstitute() {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth()+1) + '/' + showdate.getFullYear();
    return (
        <>
            <div className='container'>
                <div className='row admin-institute-title'>
                    <div className='institute-title'>Institute Form</div>
                </div>
                <div className='row all-information'>
                    <input type='text' className='form-control' placeholder='Institute Name' />
                    <input type='textarea' className='form-control' placeholder='Description' />
                    <input type='text' className='form-control' placeholder='Tagline' />
                    <input type='text' className='form-control' placeholder='Headline' />
                    <input type='text' className='form-control' placeholder='Courses' />
                    <input type='text' className='form-control' placeholder='Any Special Recognitions or Affiliations' />
                    <input type='text' className='form-control' placeholder='Affiliation ref. Number' />
                    <div className='col-2'>
                        Registration Date
                    </div>
                    <div className='col-10'>
                        <input type='text' className='form-control' value={displaytodaysdate} />
                    </div>
                    <Link to={"/admin/dashboard"}>Admin dashboard</Link>
                </div>
            </div>
        </>
    )
}

export default FormInstitute