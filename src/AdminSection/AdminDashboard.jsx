import React from "react";
import "../Css/admindashboardStyle.css";
import AdminDashboardInfobox from "../components/AdminDashboardInfobox";
import { Link } from "react-router-dom";
import AdminDashboardTable from "../components/AdminDashboardTable";

function AdminDashboard() {
  return (
    <div className="container">
      <div className="row upper-content">
        <div className="col-md-3 admin-branch-button offset-md-6">
          <Link to="/admin/adminbranch"> 
            <button type="submit" className="btn admin-branch-btn">
              Branch
            </button>
          </Link>
        </div>

        <div className="col-md-3 admin-permission-button">
          <button type="submit" className="btn admin-branch-btn">
            Permission 05
          </button>
        </div>
      </div>
      <div className="row center-content">
        <div className="col-md-4 branch-div">
          <AdminDashboardInfobox
            heading="Branches"
            infonumber="07"
            infodata="There are 07 Branches present"
          />
        </div>
        <div className="col-md-4 faculty-div">
          <AdminDashboardInfobox
            heading="Faculty"
            infonumber="07"
            infodata="There are 07 Branches present"
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
