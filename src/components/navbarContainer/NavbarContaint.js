import React, { Component } from "react";
//import './NavbarContaint.css'

export default class NavbarContaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="col footer-text">
              <p className="footer-font">
                we help our custmers achive high-performance through technology
              </p>
              <p className="footer-smallfont">
                we offer a high-quality delivery of complex system including
                <span>ERP,CRM</span>
                and other cutting-age solution involving IOT,Blockchain and
                Full-Stack Development
              </p>
              <br />
              <br />
              <button className="btn1">
                <span className="btn-text">More Detail</span>
              </button>
            </div>
            <div className="col">
              <form className="form">
                <p className="form-text">Sign Up for Free</p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    onChange={(event)=>{this.setState({name:event.target.value})}}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(event)=>{this.setState({email:event.target.value})}}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.Password}
                    onChange={(event)=>{this.setState({Password:event.target.value})}}
                  />
                </div>
                <div className="form-group">
                  <select className="form-control select">
                    <option>Type</option>
                  </select>
                </div>

                <button type="submit" className="form-control formbtn" onClick={()=>this.submit}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
