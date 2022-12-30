import React from "react";
import { Link } from "react-router-dom";
import { GrNotification } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard, MdOutlineNavigateNext } from "react-icons/md";
import { FaMandalorian } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BiBookmarkAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { MdWork } from "react-icons/md";

const Header = () => {
  return (
    <div id="wrapper">
      {/* Header Container  */}
      <header
        id="utf-header-container-block"
        className="fullwidth dashboard-header not-sticky"
      >
        <div id="header">
          <div className="container">
            <div className="utf-left-side">
              <div id="logo">
                <Link to="/Dashboard">
                  <img src="../images/footernewlogo.png" alt="logo" />
                </Link>
              </div>
              <nav id="navigation"></nav>
              <div className="clearfix"></div>
            </div>

            <div className="utf-right-side">
              <div className="utf-header-widget-item hide-on-mobile">
                <div className="utf-header-notifications">
                  <div className="utf-header-notifications-trigger notifications-trigger-icon">
                    <Link to="#">
                      <GrNotification />
                      <span>5</span>
                    </Link>
                  </div>
                  <div className="utf-header-notifications-dropdown-block">
                    <div className="utf-header-notifications-headline">
                      <h4>View All Notifications</h4>
                    </div>
                    <div className="utf-header-notifications-content">
                      <div
                        className="utf-header-notifications-scroll"
                        data-simplebar
                      >
                        <ul>
                          <li className="notifications-not-read">
                            <Link to="dashboard-manage-resume.php">
                              <span className="notification-icon">
                                <FaUserFriends />
                              </span>
                              <span className="notification-text">
                                <strong>Apurva Singal</strong> Applied for Jobs
                                <span className="color_blue">Full Time</span>
                                <strong>Web Designer</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="dashboard-manage-resume.php">
                              <span className="notification-icon">
                                <MdWork />
                              </span>
                              <span className="notification-text">
                                <strong>Ravi Kumar</strong> Applied for Jobs
                                <span className="color_green">Internship</span>
                                <strong>Web Designer</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="dashboard-manage-resume.php">
                              <span className="notification-icon">
                                <MdWork />
                              </span>
                              <span className="notification-text">
                                <strong>Preeti Kaur</strong> Applied for Jobs
                                <span className="color_yellow">Part Time</span>
                                <strong>Web Designer</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="dashboard-manage-resume.php">
                              <span className="notification-icon">
                                <MdWork />
                              </span>
                              <span className="notification-text">
                                <strong>Komal Khatri</strong> Applied for Jobs
                                <span className="color_blue">Full Time</span>
                                <strong>Web Designer</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="dashboard-manage-resume.php">
                              <span className="notification-icon">
                                <MdWork />
                              </span>
                              <span className="notification-text">
                                <strong>Anjali Sikka</strong> Applied for Jobs
                                <span className="color_yellow">Part Time</span>
                                <strong>Web Designer</strong>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      to="javascript:void(0);"
                      className="utf-header-notifications-button ripple-effect utf-button-sliding-icon"
                    >
                      See All Notificationsimport{" "}
                      <MdOutlineNavigateNext className="font-size-incre" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="utf-header-widget-item">
                <div className="utf-header-notifications user-menu">
                  <div className="utf-header-notifications-trigger user-profile-title">
                    <Link to="#">
                      <div className="user-avatar status-online">
                        <img src="../images/user_small_1.jpg" alt="" />
                      </div>
                      <div className="user-name">
                        Hi, Kritika!{" "}
                        <i>
                          <RiArrowDropDownLine className="new-icons-react" />
                        </i>
                      </div>
                    </Link>
                  </div>
                  <div className="utf-header-notifications-dropdown-block">
                    <ul className="utf-user-menu-dropdown-nav">
                      <li>
                        <Link to="/Dashboard">
                          <MdDashboard className="icons-2" />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/Manage-Job-Posts">
                          <FaMandalorian className="icons-2" /> Manage Jobs Post
                        </Link>
                      </li>
                      <li>
                        <Link to="/Manage-Jobs">
                          {" "}
                          <FaUserFriends className="icons-2" /> Manage Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="bookmarked-jobs.php">
                          <BiBookmarkAlt className="icons-2" /> Bookmarks Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="my-profile.php">
                          <CgProfile className="icons-2" /> My Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="../index.php">
                          <AiOutlineLogout className="icons-2" />
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="clearfix"></div>
    </div>
  );
};

export default Header;
