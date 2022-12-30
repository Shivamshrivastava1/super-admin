import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/api_cogent/api/recruiter/login_otp", {
        otp: data.otp,
      })
      .then((res) => {
        alert("Login Successfull");
        navigate("/Dashboard");
        console.log(res.data);
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
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img src="../images/6-1.png" alt="" className="img-fluid" />
            </div>

            <div className="col-sm-6">
              <div className="form-new">
                <form>
                  <label htmlFor="number" className="label-1">
                    Enter OTP Here:
                  </label>
                  <InputMask
                    mask="999-999"
                    type="phone"
                    className="custom-width"
                    placeholder="000-000"
                    id="otp"
                    onChange={(e) => handleChange(e)}
                    value={data.otp}
                  />
                  <button
                    type="submit"
                    className="btn custom-btn-new"
                    onClick={(e) => handleSubmit(e)}
                  >
                    {" "}
                    Enter OTP
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

export default Otp;
