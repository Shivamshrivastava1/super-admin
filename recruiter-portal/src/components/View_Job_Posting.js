import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Box, CircularProgress } from "@mui/material";

function View_Job_Posting() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://holowash.in/apicogent/recruiterandjobpost/view")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .get("https://holowash.in/apicogent/job_posting/delete/" + id)
      .then((result) => {
        console.log(result.user);
      });
    alert("Delete Successfully");
    fetchData();
  };

  const handleStatus = (id) => {
    axios
      .get("https://holowash.in/apicogent/job_posting/status/" + id)
      .then((result) => {
        console.log(result.user);
      });
    fetchData();
  };

  return (
    <div className="utf-dashboard-content-container-aera" data-simplebar>
      <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
        <div className="row">
          <div className="col-xl-12 z-index-1">
            <h3>Show Jobs Post</h3>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="dashboard.php">Dashboard</a>
                </li>
                <li>View Jobs</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="utf-dashboard-content-inner-aera">
        <div class="row">
          <div class="col-12">
            <div className="dashboard-box">
              <div className="headline">
                <h3>
                  View Job Category
                  <button
                    onClick={() => navigate("/Manage-job-posts")}
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Add Job Post
                  </button>
                </h3>
              </div>
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>Job Id</th>
                    <th>Designation Name</th>
                    <th>Department Name</th>
                    <th>Total Experience</th>
                    <th>Qualification</th>
                    <th>Location</th>
                    <th>Company Name</th>
                    <th>Status</th>
                    <th colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data ? (
                    data.map((items) => (
                      <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.designation_name}</td>
                        <td>{items.category_name}</td>
                        <td>{items.total_experience}</td>
                        <td>{items.qualification}</td>
                        <td>{items.location}</td>
                        <td>{items.company_name}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleStatus(items.id)}
                          >
                            {items.status}
                          </button>
                        </td>
                        <td>
                          <Link
                            style={{ color: "green" }}
                            to={"/Update_Job_Posting/" + items.id}
                          >
                            <AiFillEdit />
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(items.id)}
                            style={{ color: "red" }}
                          >
                            <AiFillDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default View_Job_Posting;
