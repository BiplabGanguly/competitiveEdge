import React from 'react'
import "../Css/adminRagistration.css";

function Signup() {
    return (
        <>
            <div className="container">
                <div className="row admin-ragistration-title-row">
                    <div className='Ragistration-title'>Ragistration</div>
                </div>
                <div className="row signupform">

                <select className='form-select'>
                            <option selected>select</option>
                            <option value="">mr</option>
                            <option value="">ms</option>
                            <option value="">mrs</option>
                        </select>    
                        <input type="text" className='form-control' placeholder='first name' />
                    
                        <input type="text" className='form-control' placeholder='middle name' />
                        <input type="text" className='form-control' placeholder='last name' />
                        <input type="text" className='form-control' placeholder='Username' />
                        <input type="password" className='form-control' placeholder='password' />
                        <input type="password" className='form-control' placeholder='confirm password' />
                        <input type="text" className='form-control' placeholder='email' />
                        <input type="text" className='form-control' placeholder='mob number' />
                        <input type="date" className='form-control' placeholder='DOB' />
                        <select className='form-select'>
                            <option selected>select gender</option>
                            <option value="">male</option>
                            <option value="">female</option>
                            <option value="">other</option>
                        </select>
                        <input type="text" className='form-control' placeholder='address' />
                        <input type="text" className='form-control' placeholder='city' />
                        <input type="text" className='form-control' placeholder='pin code' />
                        <input type="text" className='form-control' placeholder='state' />
                        <input type="text" className='form-control' placeholder='country' />
                        identity card<input type="file" className='form-control' placeholder='identity card' />

                        terms and condition <input type='checkbox' />

                        <button type='submit' className='btn btn-home'>Signup</button>

                </div>

            </div>
        </>
    )
}

export default Signup