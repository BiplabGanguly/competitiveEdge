import React, { useEffect, useState } from "react";
import "../Css/admindashboardStyle.css";
import AdminDashboardInfobox from "../components/AdminDashboardInfobox";
import { Link } from "react-router-dom";
import AdminDashboardTable from "../components/AdminDashboardTable";
import { fetchTotalFaculty,fetchTotalBranch } from "./FetchAdminData";

function AdminDashboard() {

  const [totalFaculty, setTotalFaculty] = useState(0);
  const [totalBranch, setTotalBranch] = useState(0);


  const infodatafaculty = `There are ${totalFaculty} faculties present`;
  const infodatabranch = `There are ${totalBranch} branches present`;
  useEffect(()=>{
    fetchTotalFaculty(setTotalFaculty);
    fetchTotalBranch(setTotalBranch);
  },[])
  return (
    <div className="container">
      <div className="row upper-content">
        <div className="col-md-9 admin-branch-button offset-md-2">
          <Link to="/admin/adminbranch"> 
            <button type="submit" className="btn admin-branch-btn">
              Branch
            </button>
          </Link>
        </div>

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
      <div className="row mt-5">
        <AdminDashboardTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
