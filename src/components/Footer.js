import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className=" footer">
        <div className="footer-container">
          <div className="row">
            <div className="col footer-text">
            <p className="footer-font">
                XcelPros delivers
                 transformation
                 through technology.
              </p>
              <p className="footer-smallfont">
                Technology is the key enabler of exponential
                <br /> growth for us and our customers
              </p>
              
            </div>
            <div className="col">
              <form className="form">
                <p className="form-text">Sign Up for Free</p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control select">
                    <option>Type</option>
                  </select>
                </div>

                <button type="submit" className="form-control formbtn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="font-aswm">
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <p className="Copyright">@ Copyright 2008 XO Pros.All Right Reserved</p>
        </div>
      </div>
    );
  }
}
