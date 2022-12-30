import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Registeration() {
  const navigate = useNavigate();
  const [industry, setIndustry] = useState([]);

  const [data, setData] = useState({
    name: "",
    mobile_no: "",
    email: "",
    address: "",
    category: "",
  });

  const fetchDataIndustry = () => {
    fetch("http://localhost/api_cogent/api/industry/view_industry")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIndustry(data.result);
      });
  };

  useEffect(() => {
    fetchDataIndustry();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/api_cogent/api/recruiter/register", {
        name: data.name,
        mobile_no: data.mobile_no,
        email: data.email,
        address: data.address,
        category: data.industry_name,
      })
      .then((res) => {
        alert("Form Submitted Successfully");
        navigate("/login");
      });
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    console.log(newData);
    setData(newData);
  };

  return (
    <div className="container">
      <div className="box-shadow">
        <div className="row align-items-center-9">
          <div className="col-md-6 background-img-09">
            <img src="../images/e1.jpg" alt="" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <div className="form-new">
              <h3 className="color-do">Register Now</h3>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name" className="label-1-0">
                  Enter Your Name Here:
                </label>
                <input
                  type="text"
                  id="name"
                  className="custom-width-2"
                  placeholder="Fullname"
                  value={data.name}
                  onChange={(e) => handleChange(e)}
                />

                <label htmlFor="email" className="label-1-0">
                  Enter Your email Here:
                </label>
                <input
                  type="email"
                  id="email"
                  className="custom-width-2"
                  placeholder="email"
                  value={data.email}
                  onChange={(e) => handleChange(e)}
                />

                <label htmlFor="password" className="label-1-0">
                  Enter Your mobile number Here:
                </label>
                <input
                  type="text"
                  id="mobile_no"
                  className="custom-width-2"
                  placeholder="Mobile No"
                  value={data.mobile_no}
                  onChange={(e) => handleChange(e)}
                />

                <label htmlFor="address" className="label-1-0">
                  Enter Your address Here:
                </label>
                <input
                  type="text"
                  id="address"
                  className="custom-width-2"
                  placeholder="address"
                  value={data.address}
                  onChange={(e) => handleChange(e)}
                />

                <label htmlFor="profile" className="label-1-0">
                  Profile Image
                </label>
                <input
                  type="file"
                  className="custom-width-2-1"
                  placeholder="upload your image"
                />
                <label htmlFor="category" className="label-1-0">
                  Choose Your Category
                </label>
                <select
                  style={{ padding: "0" }}
                  defaultValue="Choose Industry"
                  id="industry_name"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="0">---Choose Industry Name---</option>
                  {industry.map((items) => (
                    <option kye={items.id} value={items.name}>
                      {items.industry_name}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="btn btn-primary hellll"
                  value="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registeration;
