import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMandalorian } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdDomainVerification } from "react-icons/md";
import { FaSms } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import { RiWallet2Line } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  return (
    <aside>
      <div className="utf-dashboard-sidebar-item">
        <div className="utf-dashboard-sidebar-item-inner">
          <div className="utf-dashboard-nav-container">
            {/* Responsive Navigation Trigger */}
            <Link to="#" className="utf-dashboard-responsive-trigger-item">
              <span className="hamburger utf-hamburger-collapse-item">
                <span className="utf-hamburger-box-item">
                  <span className="utf-hamburger-inner-item"></span>
                </span>
              </span>
              <span className="trigger-title">Dashboard Navigation Menu</span>
            </Link>
            {/* <!-- Navigation --> */}
            <div className="utf-dashboard-nav">
              <div className="utf-dashboard-nav-inner">
                <div className="dashboard-profile-box">
                  <span className="avatar-img">
                    <img
                      alt=""
                      src="../../images/user-avatar-placeholder.png"
                      className="photo"
                    />
                  </span>
                  <div className="user-profile-text">
                    <span className="fullname">Ritu Singal</span>
                    <span className="user-role">Software Engineer</span>
                  </div>
                </div>
                <div className="clearfix"></div>
                <ul>
                  <li id="sidebarToggle01">
                    <Link to="/Dashboard">
                      <MdDashboard className="icons-1" />
                      Dashboard
                    </Link>
                  </li>
                  <li id="sidebarToggle02">
                    <Link to="/Manage-job-posts">
                      <FaMandalorian className="icons-1" /> Manage Jobs Post
                    </Link>
                  </li>
                  <li id="sidebarToggle02">
                    <Link to="/View_Job_Posting">
                      <MdViewList className="icons-1" /> View Jobs Post
                    </Link>
                  </li>
                  <li id="sidebarToggle03">
                    <Link to="/Manage-jobs">
                      <FaUserFriends className="icons-1" /> Manage Jobs
                      <span className="nav-tag">5</span>
                    </Link>
                  </li>
                  <li id="sidebarToggle04">
                    <Link to="/CandidateApplications">
                      <FaUserFriends className="icons-1" /> Candidates
                      Application
                    </Link>
                  </li>
                  <li id="sidebarToggle05">
                    <Link to="/RecuriterApplicationList">
                      <FaUserFriends className="icons-1" /> Recruiter Candidate
                      List
                    </Link>
                  </li>
                  <li id="sidebarToggle06">
                    <Link to="/SuperAdminCandidateList">
                      <FaUserFriends className="icons-1" /> Super admin
                      Candidate List
                    </Link>
                  </li>
                  <li id="sidebarToggle07">
                    <Link to="/Reports">
                      <BsGraphUp className="icons-1" /> Reports
                    </Link>
                  </li>
                  <li id="sidebarToggle08">
                    <Link to="/CandidateTracking">
                      <MdOutlineRateReview className="icons-1" /> Candidate
                      Tracking
                    </Link>
                  </li>
                  <li id="sidebarToggle09">
                    <Link to="/RecruiterRequirementEnquiry">
                      <FaBookOpen className="icons-1" /> Recruiter Requirement
                      Enquiry
                    </Link>
                  </li>
                  <li id="sidebarToggle10">
                    <Link to="/EmployeeVerificationRequest">
                      <MdDomainVerification className="icons-1" /> Employee
                      Verification Request
                    </Link>
                  </li>
                  <li id="sidebarToggle11">
                    <Link to="MailReminderSetting">
                      <FaSms className="icons-1" /> SMS/Mail Reminder Setting
                    </Link>
                  </li>
                  <li id="sidebarToggle12">
                    <Link to="WalletPlanView">
                      <BiWalletAlt className="icons-1" /> Wallet Plan View
                    </Link>
                  </li>
                  <li id="sidebarToggle13">
                    <Link to="PaymentReminder">
                      <RiWallet2Line className="icons-1" /> Payment Reminder
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
