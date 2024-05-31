import React, { useState } from 'react';
import { postExamQuestion } from '../ExamComponents/FetchExamData';

function QuestionAddModal() {
    const [question, setQuestion] = useState('');
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [currectAns, setCurrectAns] = useState('');

    const submitQuestion = async (e) => {
        e.preventDefault();
        const questionData = {
            question: question,
            answer1: ans1,
            answer2: ans2,
            answer3: ans3,
            answer4: ans4,
            currectanswer: currectAns
        }
        postExamQuestion(questionData);
        window.location.reload();
        // console.log(examdata)

    }

    const handleRadioChange = (e) => {
        setCurrectAns(e.target.value);
    }

    return (
        <div className="modal fade" id="questionAddModal" tabIndex="-1" aria-labelledby="questionAddModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Questions</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={submitQuestion}>
                        <div className="modal-body">
                            <textarea placeholder='Question' className='form-control mb-3' value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={ans1} onChange={handleRadioChange} />
                                <input type="text" className='form-control' placeholder='answer 1' value={ans1} onChange={(e) => setAns1(e.target.value)} />
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={ans2} onChange={handleRadioChange} />
                                <input type="text" className='form-control' placeholder='answer 2' value={ans2} onChange={(e) => setAns2(e.target.value)} />
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={ans3} onChange={handleRadioChange} />
                                <input type="text" className='form-control' placeholder='answer 3' value={ans3} onChange={(e) => setAns3(e.target.value)} />
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value={ans4} onChange={handleRadioChange} />
                                <input type="text" className='form-control' placeholder='answer 4' value={ans4} onChange={(e) => setAns4(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuestionAddModal;
