const url1 = 'https://competitiveedge-django.onrender.com/user/';
const url2 = "https://competitiveedge-django.onrender.com/institute/";


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


const fetchTotalBranch = async(setData) =>{
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

const fetchAllBranchDetails  = async(setData) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/institute/branch-details/`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        // console.log(data)
        setData(data.all_branches);
      } catch (error) {
        console.error('Error fetching total faculty:', error);
      }
}

export {fetchTotalFaculty,fetchTotalBranch,fetchAllBranchDetails};


