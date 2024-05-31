import React, { useEffect, useState } from 'react'
import ExamCreateModal from '../Modal/ExamCreateModal';
import Loader from "../components/Loader";
import { fetchAllBranchDetails } from '../AdminSection/FetchAdminData';
import { FetchCompletedExam, fetchScheduleExams } from './FetchExamData';
import { Link } from 'react-router-dom';

function AdminExamDash() {
    const [loading, setLoading] = useState(true);
    const [branchData, setBranchData] = useState([]);
    const [ScheduledExam, setScheduledExam] = useState([]);
    const [completedExam, setCompletedExam] = useState([]);

    const formatTime = (timeString) => {
        const time = new Date(`2000-01-01T${timeString}`);
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };


    const getExamId = (id) => {
        localStorage.setItem("examid", id)
    }

    useEffect(() => {
        fetchAllBranchDetails(setBranchData);
        fetchScheduleExams(setScheduledExam);
        FetchCompletedExam(setCompletedExam);
        //loader...
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])
    return (
        <>
            {(loading ? (
                <Loader />
            ) : (
                <>
                    <ExamCreateModal branchData={branchData} />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 admin-branch-button offset-md-2">
                                <button type="button" className="btn admin-branch-btn" data-bs-toggle="modal" data-bs-target="#examCreateModal">
                                    Create Exams
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="dashboardinfo">Scheduled Exams</div>
                            <hr />
                            <div className="row">

                                {ScheduledExam && ScheduledExam.length > 0 ? (
                                    ScheduledExam.map((examdata) => (
                                        <div className="col-md-4 card me-3 mb-3" >
                                            <p>{examdata.exam_branch}</p>
                                            <p>{examdata.exam_name}</p>
                                            <p>{examdata.exam_date}</p>
                                            <p>{formatTime(examdata.exam_start_time)}</p>
                                            <p>{formatTime(examdata.exam_end_time)}</p>
                                            <Link to={`/admin/questionbox/${examdata.id}`}>
                                                <button type='btn' className='btn btn-primary' onClick={() => getExamId(examdata.id)}>add question</button>
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <p>No scheduled exams available.</p>
                                )}

                            </div>
                        </div>

                        <div className="row">

                        </div>

                        <div className="row">
                            <div className="dashboardinfo">Completed Exams</div>
                            <hr />
                            <div className="row">
                                <div className='card'>
                                    {completedExam && completedExam.length > 0 ? (
                                        completedExam.map((examdata) => (

                                            <div className="col-md-4">
                                                <p>{examdata.exam_name}</p>
                                                <p>{examdata.exam_branch}</p>
                                                <p>{examdata.exam_date}</p>
                                                <p>{formatTime(examdata.exam_start_time)}</p>
                                                <p>{formatTime(examdata.exam_end_time)}</p>
                                            </div>

                                        ))
                                    ) : (
                                        <p>No completed exams available.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))
            }
        </>
    )
}

export default AdminExamDash;