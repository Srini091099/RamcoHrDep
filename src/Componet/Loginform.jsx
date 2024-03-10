import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../Style/Loginform.css";
import { useAuth } from "./AuthProvider";
import Userprofile from "./Userprofile";
import Navbar from "./Navbar";

export default function Loginform() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  const { login, authenticated } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    if (isLogin) {
      if (formData.email.trim() === "" || formData.password.trim() === "") {
        alert("Please enter both email and password.");
        return;
      }

      login(formData.email, formData.password);
    } else {
      alert("pls provide valid username and password");
    }
  };

  console.log(authenticated);
  if (authenticated) {
    return <Link to="/home" />;
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="quote-container">
                  <p className="quote-text">
                    "Success is not final, failure is not fatal: It is the
                    courage to continue that counts." - Winston Churchill
                  </p>
                </div>

                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    {isLogin ? (
                      <button
                        type="button"
                        className="buttonxdc"
                        onClick={() => setIsLogin(false)}
                      >
                        Don't have an account? Log In
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="buttonxdc"
                        onClick={() => setIsLogin(true)}
                      >
                        Already have an account? Sign Up
                      </button>
                    )}
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log" />
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">
                              {isLogin ? "Log In" : "Sign Up"}
                            </h4>
                            {isLogin && (
                              <div className="form-group">
                                <input
                                  type="email"
                                  id="email1"
                                  name="email"
                                  className="form-style"
                                  placeholder="Email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                                <i className="fas fa-sign-in-alt"></i>
                                <input
                                  type="password"
                                  id="password"
                                  name="password"
                                  className="form-style"
                                  placeholder="Password"
                                  value={formData.password}
                                  onChange={handleInputChange}
                                />
                                <i className="fas fa-sign-in-alt"></i>
                              </div>
                            )}
                            {!isLogin && (
                              <>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-style"
                                    placeholder="Firstname"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                  />
                                  <i className="input-icon uil uil-user" />
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-style"
                                    placeholder="Lastname"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                  />
                                  <i className="input-icon uil uil-phone" />
                                  <div className="form-group mt-2">
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-style"
                                      placeholder="email"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="text"
                                    id="passowrd"
                                    name="password"
                                    className="form-style"
                                    placeholder="password"
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </>
                            )}
                            <button className="btn mt-4" type="submit">
                              {isLogin ? "Login" : "Register"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
