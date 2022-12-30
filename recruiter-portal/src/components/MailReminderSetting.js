
import React from "react";
import Footer from "./Footer";
import Datatable10 from "../datatables/Datatable10";

const MailReminderSetting = () => {
  return (
    <div class="utf-dashboard-content-container-aera" data-simplebar>
      <div id="dashboard-titlebar" class="utf-dashboard-headline-item">
        <div class="row">
          <div class="col-xl-12 z-index-1">
            <h3>MailReminderSetting</h3>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <a href="/index">Home</a>
                </li>
                <li>
                  <a href="/Dashboard">Dashboard</a>
                </li>
                <li>MailReminderSetting</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="utf-dashboard-content-inner-aera">
        <div class="row">
          <div class="col-xl-12">
            <Datatable10 />
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="utf-dashboard-footer-spacer-aera"></div>
        <Footer />
      </div>
    </div>
  );
};

export default MailReminderSetting;
