// http://127.0.0.1:8000/exam/exam-data/2/
// complete-exam/<uid>/'

import baseURL from "../BaseURL";

const examURL = `${baseURL}/exam`;

const fetchScheduleExams = async (setData) => {
    const user_token = localStorage.getItem("admin_token");
    const user_id = localStorage.getItem("admin_id");
    try {
        const response = await fetch(`${examURL}/exam-data/${user_id}`, {
            method: "GET",
            headers: {
                Authorization: `Token ${user_token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        // console.log(data)
        setData(data);
    } catch (error) {
        console.error('Error fetching total faculty:', error);
    }
}



const FetchCompletedExam = async (setData) => {
    const user_token = localStorage.getItem("admin_token");
    const user_id = localStorage.getItem("admin_id");
    try {
        const response = await fetch(`${examURL}/complete-exam/${user_id}`, {
            method: "GET",
            headers: {
                Authorization: `Token ${user_token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        // console.log(data)
        setData(data);
    } catch (error) {
        console.error('Error fetching total faculty:', error);
    }
}


const PostExamData = async (dataToPost) => {
    const user_token = localStorage.getItem("admin_token");
    const user_id = localStorage.getItem("admin_id");
    try {
        const response = await fetch(`${examURL}/exam-data/${user_id}/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user_token}`
            },
            body: JSON.stringify(dataToPost)
        });
        if (!response.ok) {
            throw new Error('Failed to post data');
        }
        await response.json();
    } catch (error) {
        console.error('Error posting data:', error);
    }
};

export { fetchScheduleExams, FetchCompletedExam, PostExamData };