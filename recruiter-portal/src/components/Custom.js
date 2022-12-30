import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

function Custom(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [val1, setval1] = useState([]);
  const [val2, setval2] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const username = localStorage.setItem("email", email);
    const userpassword = localStorage.setItem("password", password);

    if (email === username && password === userpassword) {
      alert("successfully login");
      navigate("/Dashboard");
      props.data();
    } else {
      alert("login password or email is invalid");
    }
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
                <form action="">
                  <label htmlFor="email" className="label-1">
                    Enter Your email Here:
                  </label>
                  <input
                    type="email"
                    className="custom-width"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label htmlFor="password" className="label-1">
                    Enter Your password Here:
                  </label>
                  <input
                    type="password"
                    className="custom-width"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn custom-btn-new"
                    value="submit"
                    onClick={submit}
                  >
                    Login
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

export default Custom;
