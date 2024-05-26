import baseURL from "../BaseURL";
const url1 = `${baseURL}/user/`;
const url2 = `${baseURL}/institute/`;


const fetchTotalFaculty = async (setData) => {
  try {
    const response = await fetch(`${url1}total-faculty/`);
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
  try {
    const response = await fetch(`${url2}branch-count/`);
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
  try {
    const response = await fetch(`${baseURL}/institute/branch-details/`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    setData(data.all_branches);
  } catch (error) {
    console.error('Error fetching total faculty:', error);
  }
}


const fetchAllFacultyDetails = async (setData) => {
  try {
    const response = await fetch(`${baseURL}/user/faculty-details/`);
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


