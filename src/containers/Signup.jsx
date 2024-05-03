import React from 'react'
import "../Css/adminRagistration.css";

function Signup() {
    return (
        <>
            <div className="container">
                <div className="row admin-ragistration-title-row">
                    <div className='Ragistration-title'>Ragistration</div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <input type="text" className='form-control' placeholder='first name' />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className='form-control' placeholder='last name' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <input type="text" className='form-control' placeholder='email' />
                    </div>
                    <div className="col-md-4">
                        <select className='form-select'>
                            <option selected>select gender</option>
                            <option value="">male</option>
                            <option value="">female</option>
                            <option value="">other</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <input type="text" className='form-control' placeholder='organization name' />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className='form-control' placeholder='User name' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <input type="text" className='form-control' placeholder='Password' />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className='form-control' placeholder='confirm Password' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 offset-md-3">
                        <button type='button' className='btn btn-primary form-control'>Clean</button>
                    </div>
                    <div className="col-md-3">
                        <button type='button' className='btn btn-success form-control'>Signup</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup