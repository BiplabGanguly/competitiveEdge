import React from 'react'
import ExamCreateModal from '../Modal/ExamCreateModal';

function AdminExamDash() {
    return (
        <>
            <ExamCreateModal />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 admin-branch-button offset-md-2">
                        <button type="submit" className="btn admin-branch-btn" data-bs-toggle="modal" data-bs-target="#examCreateModal">
                            Create Exams
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="dashboardinfo">Scheduled Exams</div>
                    <hr />
                </div>

                <div className="row">

                </div>

                <div className="row">
                    <div className="dashboardinfo">Completed Exams</div>
                    <hr />
                </div>
            </div>


        </>
    )
}

export default AdminExamDash;