import React, { useState, useEffect } from 'react'
import Loader from "../components/Loader";
import QuestionAddModal from '../Modal/QuestionAddModal';
import "../Css/QuestionBoxStyle.css";


function QuestionBox() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //loader...
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    return (
        <>
            {(loading ? (
                <Loader />) : (
                <>
                    <QuestionAddModal />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 admin-branch-button offset-md-2">
                                <button type="button" className="btn admin-branch-btn" data-bs-toggle="modal" data-bs-target="#questionAddModal">
                                    Add questions
                                </button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='table-responsive table-info'>
                                <table className='table table-bordered table-striped table-hover'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>Question</th>
                                            <th>First Ans</th>
                                            <th>Second Ans</th>
                                            <th>Third Ans</th>
                                            <th>Fourth Ans</th>
                                            <th>Correct Ans</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                        </tr>
                                        <tr>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                        </tr>
                                        <tr>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                        </tr>
                                        <tr>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                            <td>jfnjngrj</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )
            )}
        </>

    )
}

export default QuestionBox