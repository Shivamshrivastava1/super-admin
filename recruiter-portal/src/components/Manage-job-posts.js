import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";

const ManageJobsPosts = () => {
  const navigate = useNavigate();
  const urlPost = "https://holowash.in/apicogent/job_posting/add";
  const [designation, setDesignation] = useState([]);
  const [category, setCategory] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [data, setData] = useState({
    designation_id: "",
    gender: "",
    department_id: "",
    total_experience: "",
    expected_salary: "",
    qualification: "",
    industry_id: "",
    location: "",
    state: "",
    company_name: "",
    role_responsliblity: "",
    application_alert: "",
    interviewer_name: "",
    contact_no: "",
    interview_type: "",
    interview_day: "",
    interview_time: "",
    contact_view: "",
    google_location: "",
    interview_address: "",
    reminder: "",
    paid_response: "",
  });

  const fetchDataIndustry = () => {
    fetch("https://holowash.in/apicogent/industry/view_industry")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIndustry(data.result);
      });
  };

  useEffect(() => {
    fetchDataIndustry();
  }, []);

  const fetchDataDepartment = () => {
    fetch("https://holowash.in/apicogent/job_category/view_job")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data.result);
      });
  };

  useEffect(() => {
    fetchDataDepartment();
  }, []);

  const fetchDataDesignation = () => {
    fetch("https://holowash.in/apicogent/recruiter/views")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "dataDesigination");
        setDesignation(data);
      });
  };

  useEffect(() => {
    fetchDataDesignation();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(urlPost, {
        designation_id: data.designation_id,
        gender: data.gender,
        total_experience: data.total_experience,
        department_id: data.department_id,
        industry_id: data.industry_id,
        expected_salary: data.expected_salary,
        qualification: data.qualification,
        location: data.location,
        state: data.state,
        interview_type: data.interview_type,
        interview_day: data.interview_day,
        contact_view: data.contact_view,
        paid_response: data.paid_response,
        company_name: data.company_name,
        role_responsliblity: data.role_responsliblity,
        application_alert: data.application_alert,
        interviewer_name: data.interviewer_name,
        contact_no: data.contact_no,
        interview_time: data.interview_time,
        google_location: data.google_location,
        interview_address: data.interview_address,
        reminder: data.reminder,
      })
      .then((res) => {
        alert("Form Submitted Successfully");
        navigate("/View_Job_Posting");
      });
  }
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
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
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>Manage Jobs Post</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="utf-dashboard-content-inner-aera">
        <div className="row">
          <div className="col-xl-12">
            <div className="dashboard-box">
              <div className="headline">
                <h3>General Information</h3>
              </div>
              <div className="content with-padding padding-bottom-10">
                <div className="row">
                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Designation</h5>
                      <Form.Select
                        defaultValue="Choose Designation Name"
                        id="designation_id"
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="0">---Choose Designation---</option>
                        {designation ? (
                          designation.map((items) => (
                            <option kye={items.id} value={items.id}>
                              {items.designation ? items.designation : "null"}
                            </option>
                          ))
                        ) : (
                          <Box
                            p={3}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <CircularProgress
                              size={50}
                              disableShrink
                              thickness={3}
                            />
                          </Box>
                        )}
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Gender</h5>
                      <Form.Select
                        defaultValue={data.gender}
                        id="gender"
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Gender ---</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Department</h5>
                      <Form.Select
                        defaultValue="Choose Department"
                        id="department_id"
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="0">---Choose Department---</option>
                        {category.map((items) => (
                          <option kye={items.id} value={items.id}>
                            {items.category_name}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Total Experience</h5>
                      <Form.Select
                        defaultValue={data.total_experience}
                        id="total_experience"
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Exprience Year ---</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-1 Year">0-1 Year</option>
                        <option value="2 Year">2 Year</option>
                        <option value="3 Year">3 Year</option>
                        <option value="4 Year">4 Year</option>
                        <option value="5 Year">5 Year</option>
                        <option value="7 Year">7 Year</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Expected Salary</h5>
                      <Form.Select
                        id="expected_salary"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.expected_salary}
                      >
                        <option>--- Choose Expected Salary ---</option>
                        <option value="20000">20000</option>
                        <option value="25000">25000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Qualification</h5>
                      <Form.Select
                        id="qualification"
                        data-size="5"
                        title="Select Experience"
                        defaultValue={data.qualification}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Qualification ---</option>
                        <option value="10th">10th or Below 10th</option>
                        <option value="12th">12th Pass</option>
                        <option value="diploma">Diploma</option>
                        <option value="iti">ITI</option>
                        <option value="graduation">Graduate</option>
                        <option value="post graduation">Post Graduate</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Industry</h5>
                      <Form.Select
                        defaultValue="Choose Industry"
                        id="industry_id"
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="0">---Choose Industry Name---</option>
                        {industry.map((items) => (
                          <option kye={items.id} value={items.id}>
                            {items.industry_name}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Location</h5>
                      <div className="utf-input-with-icon">
                        <Form.Select
                          id="location"
                          data-size="5"
                          title="Select Experience"
                          defaultValue={data.location}
                          onChange={(e) => handleChange(e)}
                        >
                          <option>--- Choose Location ---</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Noida">Noida</option>
                          <option value="Gurugam">Gurugam</option>
                          <option value="Faridabad">Faridabad</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                        </Form.Select>
                        <i className="icon-material-outline-location-on"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>State</h5>
                      <Form.Select
                        id="state"
                        data-size="5"
                        title="Select Experience"
                        defaultValue={data.state}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose State ---</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugam">Gurugam</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Company Name/Hiring for</h5>
                      <input
                        type="text"
                        id="company_name"
                        className="utf-with-border"
                        placeholder="Company Name/Hiring for"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.company_name}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Role & Responsibities</h5>
                      <textarea
                        cols="40"
                        rows="2"
                        id="role_responsliblity"
                        className="utf-with-border"
                        placeholder="Role & Responsibities"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.role_responsliblity}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Application Alert</h5>
                      <input
                        type="text"
                        id="application_alert"
                        className="utf-with-border"
                        placeholder="shyam.cogent@gmail.com"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.application_alert}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Interviewer Name</h5>
                      <input
                        type="text"
                        id="interviewer_name"
                        className="utf-with-border"
                        placeholder="Interviewer Name"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.interviewer_name}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Contact No</h5>
                      <input
                        type="text"
                        id="contact_no"
                        className="utf-with-border"
                        placeholder="Contact No"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.contact_no}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Interview Type</h5>
                      <Form.Select
                        id="interview_type"
                        data-size="3"
                        title="Interview Type"
                        defaultValue={data.interview_type}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Interview Type ---</option>
                        <option value="Walkin">Walkin</option>
                        <option value="Schedule">Schedule</option>
                        <option value="Online">Online</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Interview Day</h5>
                      <Form.Select
                        id="interview_day"
                        defaultValue={data.interview_day}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Interview Day ---</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Interview Timming</h5>
                      <input
                        type="text"
                        id="interview_time"
                        className="utf-with-border"
                        placeholder="11am - 5pm"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.interview_time}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Contact View to Interview</h5>
                      <Form.Select
                        id="contact_view"
                        data-size="2"
                        title="Interview Day"
                        defaultValue={data.contact_view}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Contact View ---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Google Location link</h5>
                      <input
                        type="text"
                        id="google_location"
                        className="utf-with-border"
                        placeholder="https://"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.google_location}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Interview Address</h5>
                      <input
                        type="text"
                        id="interview_address"
                        className="utf-with-border"
                        placeholder="Delhi"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.interview_address}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Reminder</h5>
                      <input
                        type="text"
                        id="reminder"
                        className="utf-with-border"
                        placeholder="Reminder"
                        onChange={(e) => handleChange(e)}
                        defaultValue={data.reminder}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Paid Response</h5>
                      <Form.Select
                        id="paid_response"
                        data-size="2"
                        title="Paid response"
                        defaultValue={data.paid_response}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>--- Choose Paid Response ---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="utf-centered-button">
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-primary"
            >
              Submit Job
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageJobsPosts;
