import React from 'react'
import "../Css/forminstituteStyle.css";
import { Link } from 'react-router-dom';


function FormInstitute() {
    return (
        <>
            <div className='container'>
                <div className='row admin-institute-title'>
                    <div className='institute-title'>Institute Form</div>
                </div>
                <hr></hr>
                <div className='row all-information d-block mx-auto'>
                    <input type='text' className='form-control mb-3' placeholder='Institute Name' />
                    <textarea className='form-control mb-3' placeholder='Description' rows={3} ></textarea>
                    <input type='text' className='form-control mb-3' placeholder='Tagline' />
                    <input type='text' className='form-control mb-3' placeholder='Headline' />
                    <input type='text' className='form-control mb-3' placeholder='Courses' />
                    <input type='text' className='form-control mb-3' placeholder='Any Special Recognitions or Affiliations' />
                    <input type='text' className='form-control mb-3' placeholder='Affiliation ref. Number' />
                    <div className='col-12 mb-3'>
                        <button type='submit' className='btn btn-home'>Register</button>
                    </div>
                    <Link to={"/admin/dashboard"}>Admin dashboard</Link>
                </div>
            </div>
        </>
    )
}

export default FormInstitute