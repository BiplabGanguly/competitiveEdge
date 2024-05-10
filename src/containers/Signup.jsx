import React from 'react'
import "../Css/adminRagistration.css";
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="container">
                <div className="row admin-ragistration-title-row">
                    <div className='Ragistration-title'>Admin Signup</div>
                </div>
                <div className="row personal-information">

                    <div className='title-personal-information'>Personal Information</div>
                    <select className='form-select'>
                        <option selected>select</option>
                        <option value="">MR</option>
                        <option value="">MS</option>
                        <option value="">MRS</option>
                    </select>
                    <input type="text" className='form-control' placeholder='first name' />
                    <input type="text" className='form-control' placeholder='last name' />
                </div>
                <hr />
                <div className='row additional-information'>
                    <div className='title-additional-information'>Additional Information</div>
                    <input type="text" className='form-control' placeholder='email' />
                    <input type="text" className='form-control' placeholder='mobile number' />
                    <input type="date" className='form-control' placeholder='DOB' />
                    <select className='form-select'>
                        <option selected>select gender</option>
                        <option value="">male</option>
                        <option value="">female</option>
                        <option value="">other</option>
                    </select>
                    <input type="textarea" className='form-control' placeholder='address' />
                    <input type="text" className='form-control' placeholder='city' />
                    <input type="text" className='form-control' placeholder='pin code' />
                    <input type="text" className='form-control' placeholder='state' />
                    <input type="text" className='form-control' placeholder='country' />
                </div>
                <hr />
                <div className='row identity-proof'>
                    <div className='title-identity-proof'>Identity-Proof</div>
                    <select className='form-select'>
                        <option selected>select Identity Card</option>
                        <option value="">Addhar Card</option>
                        <option value="">Pan Card</option>
                        <option value="">Voter Card</option>
                        <option value="">Driving Licence</option>
                    </select>
                    <div className='col-2'>
                    Upload Identity Card
                    </div>
                    <div className='col-10'>
                    <input type="file" className='form-control' placeholder='identity card' />
                    </div>
                </div>
                <hr />
                <div className='row login-credentials'>
                    <div className='title-login-credentials'>Login-Credentials</div>
                    <input type="text" className='form-control' placeholder='Username' />
                    <input type="password" className='form-control' placeholder='password' />
                    <input type="password" className='form-control' placeholder='confirm password' />


                </div>
                <hr />
                <div className='row'>
                    <div className='col-12 checkbox'>
                        <span>
                            terms and condition <input type='checkbox' />
                        </span>
                    </div>
                    <div className='col-12'>
                        <button type='submit' className='btn btn-home' disabled>Signup</button>
                    </div>
                    <div className='col-12'>
                    <span>
                    Back to {}
                        <Link to={"/admin-login"}>Sign In</Link>
                        </span>
                    </div>
                    <Link to={"/form-institute"}>Institute form</Link>
                </div>



            </div>
        </>
    )
}

export default Signup