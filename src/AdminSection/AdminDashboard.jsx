import React, { useEffect, useState } from "react";
import "../Css/admindashboardStyle.css";
import AdminDashboardInfobox from "../components/AdminDashboardInfobox";
import { Link } from "react-router-dom";
import AdminDashboardTable from "../components/AdminDashboardTable";
import { fetchTotalFaculty, fetchTotalBranch, fetchAllFacultyDetails, fetchAllBranchDetails } from "./FetchAdminData";
import AdminBranchInformation from "../components/AdminBranchInformation";
import Loader from "../components/Loader";

function AdminDashboard() {
  const [loading, setLoading] = useState(true);

  const [totalFaculty, setTotalFaculty] = useState(0);
  const [totalBranch, setTotalBranch] = useState(0);
  const [facultyDetails, setFacultyDetails] = useState([]);
  const [branchData, setBranchData] = useState([]);


  const infodatafaculty = `There are ${totalFaculty} faculties present`;
  const infodatabranch = `There are ${totalBranch} branches present`;
  useEffect(() => {
    fetchTotalFaculty(setTotalFaculty);
    fetchTotalBranch(setTotalBranch);
    fetchAllFacultyDetails(setFacultyDetails);
    fetchAllBranchDetails(setBranchData);

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
        <div className="container mb-4">
          <div className="row upper-content">
            <div className="col-md-9 admin-branch-button offset-md-2">
              <Link to="/admin/examdash">
                <button type="submit" className="btn admin-branch-btn">
                  Exams
                </button>
              </Link>
            </div>
          </div>


          <div className="row">
            <span className="dashboardinfo">Dashboard Info</span>
          </div>
          <div className="row center-content">
            <div className="col-md-4 branch-div">
              <AdminDashboardInfobox
                heading="Branches"
                infonumber={totalBranch}
                infodata={infodatabranch}
              />
            </div>
            <div className="col-md-4 faculty-div">
              <AdminDashboardInfobox
                heading="Faculty"
                infonumber={totalFaculty}
                infodata={infodatafaculty}
              />
            </div>
            <div className="col-md-4 student-div">
              <AdminDashboardInfobox
                heading="Student"
                infonumber="07"
                infodata="There are 07 Branches present"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="dashboardinfo">Your Branches</div>
          </div>
          <div className="row">   <div className="BranchDiv">
            <div className="row">
              {
                branchData.map((branch, index) => (
                  <div className="col-md-4" key={index}>
                    <AdminBranchInformation branches={branch.branch_name} />
                  </div>
                ))
              }
            </div>
          </div></div>
          <hr />
          <div className="row">
            <div className="dashboardinfo">Faculty Details</div>
          </div>
          <div className="row">
            <AdminDashboardTable tabledata={facultyDetails.faculty_details} />
          </div>
        </div >

      ))}
    </>
  );
}

export default AdminDashboard;
