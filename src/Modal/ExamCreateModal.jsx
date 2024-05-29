import React, { useState } from 'react'
import '../Css/examCreateModalStyle.css'
import { PostExamData } from '../ExamComponents/FetchExamData';

function ExamCreateModal({ branchData }) {
    const [examName, setExamName] = useState('');
    const [examDesc, setExamDesc] = useState('');
    const [examBranch, setExamBranch] = useState('');
    const [examDate, setExamDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToPost = {
            exam_name: examName,
            exam_desc: examDesc,
            exam_branch: examBranch,
            exam_date: examDate,
            exam_start_time: startTime,
            exam_end_time: endTime
        };
        await PostExamData(dataToPost);
        window.location.reload();

    }
    return (
        <div className="modal fade" id="examCreateModal" tabindex="-1" aria-labelledby="examCreateModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="examCreateModal">Create Mock Exam</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form className='createExamModal' onSubmit={handleSubmit}>
                        <div className="modal-body">

                            <div className="col-md-12 mb-3">
                                <input type="text" className='form-control' placeholder='exam name' value={examName} onChange={(e) => setExamName(e.target.value)} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <textarea className='form-control' placeholder='exam description' value={examDesc} onChange={(e) => setExamDesc(e.target.value)}></textarea>
                            </div>
                            <div className="col-md-12 mb-3">
                                <select name="" id="" className='form-control' onChange={(e) => setExamBranch(e.target.value)} value={examBranch}>
                                    <option value="">choose branch</option>
                                    {branchData && branchData.length > 0 ? (
                                        branchData.map((branch, index) => (
                                            <option value={branch.user_branch.branch_name}>{branch.user_branch.branch_name} </option>
                                        ))
                                    ) : (
                                        <option>No branches Available</option>
                                    )}
                                </select>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <span>Exam date</span>
                                </div>
                                <div className="col-md-9">
                                    <input type="date" className="form-control" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <span>Start time</span>
                                </div>
                                <div className="col-md-9">
                                    <input type="time" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <span>End time</span>
                                </div>
                                <div className="col-md-9">
                                    <input type="time" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">create exam</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExamCreateModal