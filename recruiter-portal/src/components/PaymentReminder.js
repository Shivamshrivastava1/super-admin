import React from "react";
import Footer from "./Footer";
import Datatable12 from "../datatables/Datatable12";

const PaymentReminder = () => {
  return (
    <div class="utf-dashboard-content-container-aera" data-simplebar>
      <div id="dashboard-titlebar" class="utf-dashboard-headline-item">
        <div class="row">
          <div class="col-xl-12 z-index-1">
            <h3>PaymentReminder</h3>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="dashboard.php">Dashboard</a>
                </li>
                <li>PaymentReminder</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="utf-dashboard-content-inner-aera">
        <div class="row">
          <div class="col-xl-12">
            <Datatable12 />
            <div class="clearfix"></div>
          </div>
        </div>

        <div class="utf-dashboard-footer-spacer-aera"></div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentReminder;
