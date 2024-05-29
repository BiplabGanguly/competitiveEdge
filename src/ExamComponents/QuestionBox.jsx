import React, { useState, useEffect } from 'react'
import Loader from "../components/Loader";
import QuestionAddModal from '../Modal/QuestionAddModal';


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
                    </div>
                </>
            )
            )}
        </>

    )
}

export default QuestionBox