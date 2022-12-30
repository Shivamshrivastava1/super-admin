import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    mobile_no: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/api_cogent/api/recruiter/otp", {
        mobile_no: data.mobile_no,
      })
      .then((res) => {
        alert("OTP Send Successfully");
        navigate("/Otp");
      });
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <div className="container">
        <div className="box-shadow">
          <div className="row align-items-center-0-00">
            <div className="col-sm-6">
              <img src="../images/2.png" alt="" className="img-fluid" />
            </div>

            <div className="col-sm-6">
              <div className="form-new">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="number" className="label-1">
                    Enter Your Number Here:
                  </label>
                  <InputMask
                    type="phone"
                    className="custom-width"
                    id="mobile_no"
                    value={data.mobile_no}
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="submit" className="btn custom-btn-new">
                    Send OTP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
