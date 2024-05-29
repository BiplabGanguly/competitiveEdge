import baseURL from "../BaseURL";
const url1 = `${baseURL}/user/`;
const url2 = `${baseURL}/institute/`;




const fetchTotalFaculty = async (setData) => {
  const user_token = localStorage.getItem("admin_token");
  try {
    const response = await fetch(`${url1}total-faculty/`, {
      method: "GET",
      headers: {
        Authorization: `Token ${user_token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    setData(data.total_faculty);
  } catch (error) {
    console.error('Error fetching total faculty:', error);
  }
};


const fetchTotalBranch = async (setData) => {
  const user_token = localStorage.getItem("admin_token");
  try {
    const response = await fetch(`${url2}branch-count/`, {
      method: "GET",
      headers: {
        Authorization: `Token ${user_token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    setData(data.get_all_branch_count);
  } catch (error) {
    console.error('Error fetching total faculty:', error);
  }
}

const fetchAllBranchDetails = async (setData) => {
  const user_token = localStorage.getItem("admin_token");
  const user_id = localStorage.getItem("admin_id");
  try {
    const response = await fetch(`${baseURL}/institute/branch-details/${user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${user_token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    // console.log(data.all_branches)
    setData(data.all_branches);
  } catch (error) {
    console.error('Error fetching total faculty:', error);
  }
}


const fetchAllFacultyDetails = async (setData) => {
  const user_token = localStorage.getItem("admin_token");
  try {
    const response = await fetch(`${baseURL}/user/faculty-details/`, {
      method: "GET",
      headers: {
        Authorization: `Token ${user_token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    setData(data)
  } catch (error) {
    console.error('Error fetching faculty details:', error);
  }
}

export { fetchTotalFaculty, fetchTotalBranch, fetchAllBranchDetails, fetchAllFacultyDetails };


