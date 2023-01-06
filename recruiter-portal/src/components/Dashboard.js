import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import {
  GrFormClose,
  GrFormNextLink,
  GrFormPreviousLink,
} from "react-icons/gr";
import Datatable from "../datatables/Datatable";
import { Link } from "react-router-dom";
import $ from "jquery";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin3Line } from "react-icons/ri";
import { AiOutlinePrinter } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="utf-dashboard-content-container-aera" data-simplebar>
      <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
        <div className="row">
          <div className="col-xl-12 z-index-1">
            <h3>Dashboard</h3>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <Link to="index.php">Home</Link>
                </li>
                <li>Dashboard</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="utf-dashboard-content-inner-aera">
        <div className="notification success closeable">
          <p>
            You are Currently Signed in as
            <strong>Kritika Singal</strong> Has Been Approved!
          </p>
          <Link to="#" className="close">
            <GrFormClose />
          </Link>
        </div>
        <div className="utf-funfacts-container-aera">
          <div className="fun-fact" data-fun-fact-color="#2a41e8">
            <div className="fun-fact-icon">
              <img
                src="../images/businessman.png"
                alt=""
                className="img-dashboard"
              />
            </div>
            <div className="fun-fact-text">
              <h4>1502</h4>
              <span>Associate Recruiters</span>
            </div>
          </div>
          <div className="fun-fact" data-fun-fact-color="#36bd78">
            <div className="fun-fact-icon">
              <img src="../images/cv.png" alt="" className="img-dashboard" />
            </div>
            <div className="fun-fact-text">
              <h4>500</h4>
              <span>Total Application</span>
            </div>
          </div>
          <div className="fun-fact" data-fun-fact-color="#efa80f">
            <div className="fun-fact-icon">
              <img
                src="../images/interview.png"
                alt=""
                className="img-dashboard"
              />
            </div>
            <div className="fun-fact-text">
              <h4>500</h4>
              <span> Total Interview</span>
            </div>
          </div> 
          <div className="fun-fact" data-fun-fact-color="#0fc5bf">
            <div className="fun-fact-icon">
              <img
                src="../images/subscribe.png"
                alt=""
                className="img-dashboard"
              />
            </div>
            <div className="fun-fact-text">
              <h4>200</h4>
              <span>Selected</span>
            </div>
          </div>
          <div className="fun-fact" data-fun-fact-color="#f02727">
            <div className="fun-fact-icon">
              <img
                src="../images/research.png"
                alt=""
                className="img-dashboard"
              />
            </div>
            <div className="fun-fact-text">
              <h4>200</h4>
              <span>Rejected</span>
            </div>
            
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-12 col-sm-12">
            <div className="dashboard-box main-box-in-row">
              <div className="headline">
                <h3>User Statistics</h3>
                <div className="sort-by">
                  <select className="selectpicker hide-tick">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>
              <div className="content">
                <div className="chart">
                  <canvas id="canvas" width="80" height="38"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12">
            <div className="dashboard-box main-box-in-row">
              <div className="headline">
                <h3>User Notes Activities</h3>
              </div>
              <div className="content">
                <div className="utf-header-notifications-content">
                  <div
                    className="utf-header-notifications-scroll"
                    data-simplebar
                  >
                    <ul className="utf-dashboard-box-list">
                      <li>
                        <span className="notification-icon">
                          <FaUserFriends />
                        </span>
                        <span className="notification-text">
                          <strong>Lorem Ipsum</strong> is simply dummy text of
                          printing and type setting industry. Lorem Ipsum been
                          industry standard dummy text.
                        </span>
                        <div className="utf-buttons-to-right">
                          <Link
                            to="#"
                            className="button green ripple-effect ico"
                            title="Edit"
                            data-tippy-placement="top"
                          >
                            <FiEdit className="font-size-incre-1" />
                          </Link>
                          <Link
                            to="#"
                            className="button red ripple-effect ico"
                            title="Remove"
                            data-tippy-placement="top"
                          >
                            <RiDeleteBin3Line className="font-size-incre-1" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <span className="notification-icon">
                          <MdWork />
                        </span>
                        <span className="notification-text">
                          <strong>Lorem Ipsum</strong> is simply dummy text of
                          printing and type setting industry. Lorem Ipsum been
                          industry standard dummy text.
                        </span>
                        <div className="utf-buttons-to-right">
                          <Link
                            to="#"
                            className="button green ripple-effect ico"
                            title="Edit"
                            data-tippy-placement="top"
                          >
                            <FiEdit className="font-size-incre-1" />
                          </Link>
                          <Link
                            to="#"
                            className="button red ripple-effect ico"
                            title="Remove"
                            data-tippy-placement="top"
                          >
                            <RiDeleteBin3Line className="font-size-incre-1" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <span className="notification-icon">
                          <FaUserFriends />
                        </span>
                        <span className="notification-text">
                          <strong>Lorem Ipsum</strong> is simply dummy text of
                          printing and type setting industry. Lorem Ipsum been
                          industry standard dummy text.
                        </span>
                        <div className="utf-buttons-to-right">
                          <Link
                            to="#"
                            className="button green ripple-effect ico"
                            title="Edit"
                            data-tippy-placement="top"
                          >
                            <FiEdit className="font-size-incre-1" />
                          </Link>
                          <Link
                            to="#"
                            className="button red ripple-effect ico"
                            title="Remove"
                            data-tippy-placement="top"
                          >
                            <RiDeleteBin3Line className="font-size-incre-1" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <span className="notification-icon">
                          <MdWork />
                        </span>
                        <span className="notification-text">
                          <strong>Lorem Ipsum</strong> is simply dummy text of
                          printing and type setting industry. Lorem Ipsum been
                          industry standard dummy text.
                        </span>
                        <div className="utf-buttons-to-right">
                          <Link
                            to="#"
                            className="button green ripple-effect ico"
                            title="Edit"
                            data-tippy-placement="top"
                          >
                            <FiEdit className="font-size-incre-1" />
                          </Link>
                          <Link
                            to="#"
                            className="button red ripple-effect ico"
                            title="Remove"
                            data-tippy-placement="top"
                          >
                            <RiDeleteBin3Line className="font-size-incre-1" />
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="#small-dialog"
                  className="popup-with-zoom-anim utf-header-notifications-button ripple-effect utf-button-sliding-icon"
                >
                  User Add Notes <i className="icon-feather-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-12 col-sm-12">
            <div className="dashboard-box">
              <div className="headline">
                <h3>Recent Jobs Activities</h3>
              </div>
              <div className="content">
                <ul className="utf-dashboard-box-list">
                  <li>
                    <span className="notification-icon">
                      <MdWork />
                    </span>
                    <span className="notification-text">
                      <strong>Kritika Singal</strong>
                      <Link to="#">iOS Developers</Link> Someone Downloaded Your
                      Resume.
                    </span>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button red ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="notification-icon">
                      <FaUserFriends />
                    </span>
                    <span className="notification-text">
                      <strong>Kritika Singal</strong>
                      <Link to="#">iOS Developers</Link> Someone Downloaded Your
                      Resume.
                    </span>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button red ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="notification-icon">
                      <MdWork />
                    </span>
                    <span className="notification-text">
                      <strong>Kritika Singal</strong>
                      <Link to="#">Software Engineer</Link> Someone Downloaded
                      Your Resume.
                    </span>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button red ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="notification-icon">
                      <FaUserFriends />
                    </span>
                    <span className="notification-text">
                      <strong>Kritika Singal</strong>
                      <Link to="#">Logo Designer</Link> Someone Downloaded Your
                      Resume.
                    </span>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button red ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="notification-icon">
                      <MdWork />
                    </span>
                    <span className="notification-text">
                      <strong>Kritika Singal</strong>
                      <Link to="#">Logo Designer</Link> Someone Downloaded Your
                      Resume.
                    </span>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button red ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="notification-icon">
                      <FaUserFriends />
                    </span>
                    <span className="notification-text">
                      <strong>Kritika Singal</strong>
                      <Link to="#">Web Designer</Link> Someone Downloaded Your
                      Resume.
                    </span>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button red ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
              <nav className="pagination">
                <ul>
                  <li className="utf-pagination-arrow">
                    <Link to="#" className="ripple-effect">
                      <GrFormPreviousLink className="font-size-incre" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="current-page ripple-effect">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      3
                    </Link>
                  </li>
                  <li className="utf-pagination-arrow">
                    <Link to="#" className="ripple-effect">
                      <GrFormNextLink className="font-size-incre" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-6 col-md-12 col-sm-12">
            <div className="dashboard-box">
              <div className="headline">
                <h3>All Order Invoices</h3>
                <div className="sort-by">
                  <select className="selectpicker hide-tick">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>
              <div className="content">
                <ul className="utf-dashboard-box-list">
                  <li>
                    <div className="utf-invoice-list-item">
                      <div className="utf-invoice-user-city">
                        Delhi
                        <img
                          className="flag"
                          src="images/flags/af.svg"
                          alt=""
                          data-tippy-placement="top"
                          title="Afghanistan"
                          data-tippy=""
                        />
                      </div>
                      <strong>
                        Kritika Singal <span className="paid">Paid Plan</span>
                      </strong>
                      <ul>
                        <li>
                          <span>Order ID:</span> 004312641
                        </li>
                        <li>
                          <span>Package:</span> Standard
                        </li>
                        <li>
                          <span>Date:</span> 12 Jan, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="#"
                        className="button gray"
                        title="Invoice"
                        data-tippy-placement="top"
                      >
                        <AiOutlinePrinter className="font-size-incre-1" />{" "}
                        Invoice
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="utf-invoice-list-item">
                      <div className="utf-invoice-user-city">
                        United States
                        <img
                          className="flag"
                          src="images/flags/us.svg"
                          alt=""
                          data-tippy-placement="top"
                          title="United States"
                          data-tippy=""
                        />
                      </div>
                      <strong>
                        Kritika Singal
                        <span className="paid">Paid Plan</span>
                      </strong>
                      <ul>
                        <li>
                          <span>Order ID:</span> 004312641
                        </li>
                        <li>
                          <span>Package:</span> Extended
                        </li>
                        <li>
                          <span>Date:</span> 18 Jan, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="invoice-template.php"
                        className="button gray"
                        title="Invoice"
                        data-tippy-placement="top"
                      >
                        <AiOutlinePrinter className="font-size-incre-1" />
                        Invoice
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="utf-invoice-list-item">
                      <div className="utf-invoice-user-city">
                        Australia
                        <img
                          className="flag"
                          src="images/flags/au.svg"
                          alt=""
                          data-tippy-placement="top"
                          title="Australia"
                          data-tippy=""
                        />
                      </div>
                      <strong>
                        Kritika Singal
                        <span className="unpaid">Unpaid Plan</span>
                      </strong>
                      <Button className="Btn" href ="/login">LogOut</Button>
                      <ul>
                        <li>
                          <span>Order ID:</span> 004312641
                        </li>
                        <li>
                          <span>Package:</span> Basic
                        </li>
                        <li>
                          <span>Date:</span> 06 Jan, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="invoice-template.php"
                        className="button red"
                        title="Remove"
                        data-tippy-placement="top"
                      >
                        <RiDeleteBin3Line className="font-size-incre-1" />
                        Remove
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="utf-invoice-list-item">
                      <div className="utf-invoice-user-city">
                        Brazil
                        <img
                          className="flag"
                          src="images/flags/br.svg"
                          alt=""
                          data-tippy-placement="top"
                          title="Brazil"
                          data-tippy=""
                        />
                      </div>
                      <strong>
                        Kritika Singal
                        <span className="paid">Paid Plan</span>
                      </strong>
                      <ul>
                        <li>
                          <span>Order ID:</span> 004312641
                        </li>
                        <li>
                          <span>Package:</span> Standard
                        </li>
                        <li>
                          <span>Date:</span> 25 Jan, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="utf-buttons-to-right">
                      <Link
                        to="invoice-template.php"
                        className="button gray"
                        title="Invoice"
                        data-tippy-placement="top"
                      >
                        <AiOutlinePrinter className="font-size-incre-1" />{" "}
                        Invoice
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
              <nav className="pagination">
                <ul>
                  <li className="utf-pagination-arrow">
                    <Link to="#" className="ripple-effect">
                      <GrFormPreviousLink className="font-size-incre" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="current-page ripple-effect">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      3
                    </Link>
                  </li>
                  <li className="utf-pagination-arrow">
                    <Link to="#" className="ripple-effect">
                      <GrFormNextLink className="font-size-incre" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-12 col-md-12 col-sm-12 ">
            <Datatable />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
