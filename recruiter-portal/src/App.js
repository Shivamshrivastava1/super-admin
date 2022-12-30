import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import { Form } from "react-bootstrap";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ManageJobs from "./components/Manage-jobs";
import ManageJobsposts from "./components/Manage-job-posts";
import CandidateApplication from "./components/candidateApplications";
import RecruiterApplicationList from './components/RecuriterApplicationList';
import SuperAdminCandidateList from "./components/SuperAdminCandidateList";
import Reports from "./components/Reports";
import CandidateTracking from "./components/CandidateTracking";
import RecruiterRequirementEnquiry from "./components/RecruiterRequirementEnquiry";
import EmployeeVerificationRequest from "./components/EmployeeVerificationRequest";
import MailReminderSetting from "./components/MailReminderSetting";
import WalletPlanView from "./components/WalletPlanView";
import PaymentReminder from "./components/PaymentReminder";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Registeration from "./components/Registeration";
import Custom from "./components/Custom";
import View_Job_Posting from "./components/View_Job_Posting";
import Update_Job_Posting from "./components/Update_Job_Posting";
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
 return (
    <div>

      <Header />
      <div className="utf-dashboard-container-aera">
        <SideBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/View_Job_Posting" element={<View_Job_Posting />} />
          <Route path="/Update_Job_Posting/:id" element={<Update_Job_Posting />} />
          <Route path="/registeration" element={<Registeration />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/Manage-job-posts" element={<ManageJobsposts />} />
          <Route path="/Manage-jobs" element={<ManageJobs />} />
          <Route path="/CandidateApplications" element={<CandidateApplication />} />
          <Route path="/RecruiterApplicationList" element={<RecruiterApplicationList />} />
          <Route path="/SuperAdminCandidateList" element={<SuperAdminCandidateList />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/CandidateTracking" element={<CandidateTracking />} />
          <Route path="/RecruiterRequirementEnquiry" element={<RecruiterRequirementEnquiry />} />
          <Route path="/EmployeeVerificationRequest" element={<EmployeeVerificationRequest />} />
          <Route path="/MailReminderSetting" element={<MailReminderSetting />} />
          <Route path="/WalletPlanView" element={<WalletPlanView />} />
          <Route path="/PaymentReminder" element={<PaymentReminder />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;