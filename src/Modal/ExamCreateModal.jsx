import React from 'react'
import '../Css/examCreateModalStyle.css'

function ExamCreateModal() {
    return (
        <div className="modal fade" id="examCreateModal" tabindex="-1" aria-labelledby="examCreateModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="examCreateModal">Create Mock Exam</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form className='createExamModal'>
                        <div className="modal-body">

                            <div className="col-md-12 mb-3">
                                <input type="text" className='form-control' placeholder='exam name' />
                            </div>
                            <div className="col-md-12 mb-3">
                                <textarea className='form-control' placeholder='exam description'></textarea>
                            </div>
                            <input readOnly className='form-control mb-3' />
                            <div className="col-md-12 mb-3">
                                <input type="text" className='form-control' placeholder='passkey' />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <span>Exam date</span>
                                </div>
                                <div className="col-md-9">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <span>Start time</span>
                                </div>
                                <div className="col-md-9">
                                    <input type="time" className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <span>End time</span>
                                </div>
                                <div className="col-md-9">
                                    <input type="time" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">create exam</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExamCreateModal