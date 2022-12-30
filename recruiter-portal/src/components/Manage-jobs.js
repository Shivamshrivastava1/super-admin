import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Datatable2 from "../datatables/Datatable2";

const ManageJobs = () => {
  return (
    <div className="utf-dashboard-content-container-aera" data-simplebar>
      <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
        <div className="row">
          <div className="col-xl-12 z-index-1">
            <h3>Manage Jobs Post</h3>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="dashboard.php">Dashboard</a>
                </li>
                <li>Manage-Jobs</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="utf-dashboard-content-inner-aera">
        <div class="row">
          <div class="col-xl-12">
            <Datatable2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageJobs;
