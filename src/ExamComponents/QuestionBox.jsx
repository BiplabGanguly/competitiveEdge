import React, { useState, useEffect } from 'react'
import Loader from "../components/Loader";
import QuestionAddModal from '../Modal/QuestionAddModal';
import "../Css/QuestionBoxStyle.css";
import { getExamData } from './FetchExamData';


function QuestionBox() {
    const [loading, setLoading] = useState(true);
    const [questionData, setQuestionData] = useState([]); // useState (variable{object}, function -> change the data or object)


    useEffect(() => {
        getExamData(setQuestionData)
        //loader...
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])


    // console.log(questionData)

    return (
        <>
            {(loading ? (
                <Loader />) : (
                <>
                    <QuestionAddModal />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9 admin-branch-button offset-md-2">
                                <button type="button" className="btn admin-branch-btn" data-bs-toggle="modal" data-bs-target="#questionAddModal">
                                    Add questions
                                </button>
                            </div>
                        </div>
                        <div className='row  ms-3 me-3'>
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
                                        {questionData && questionData.length > 0 ? (
                                            questionData.map((data) => (
                                                <tr>
                                                    <td>{data.question}</td>
                                                    <td>{data.answer1}</td>
                                                    <td>{data.answer2}</td>
                                                    <td>{data.answer3}</td>
                                                    <td>{data.answer4}</td>
                                                    <td>{data.currectanswer}</td>
                                                    <td>{data.user}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7">No Question available.</td>
                                            </tr>

                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )
            )
            }
        </>

    )
}

export default QuestionBox