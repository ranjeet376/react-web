import React, { Component } from "react";
//import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      // <div className="nav">
      //     <h2 ></h2>
      //      <ul className="list">
      //         <li>Home</li>
      //         <li>Feature</li>
      //         <li>Review</li>
      //         <li>Pricing</li>
      //         <li>FAQ</li>
      //         <li>Contact us now</li>
      //     </ul>
      // </div>
      
      
      <div>
          
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
      <div className="xce">
          <p>Xcelpros</p>
      </div>
         <div>
         <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Feature <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Review <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Pricing <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  FAQ <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Contact us now <span classNameass="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
         </div>
        </nav>
      </div>
    );
  }
}
