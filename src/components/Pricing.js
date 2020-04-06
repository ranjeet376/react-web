import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div className="main-pricing ">
        <p className="mini-title">PRICING</p>
        <p className="title">Choose Your Plan</p>
        <div className="main-card">
        <div class="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Basic</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span className="dollar">$</span>
              <span className="number">19</span>
              <span className="month">month</span>
            </h6>
            <p className="card-text">
              Far far away,behind the word mountains,far from the countries
              Vokalia and Consonantia,there live the blind texts.
            </p>
            <button className="card-btn"><span className="btn-text">Get Started</span></button>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Bussiness</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span className="dollar">$</span>
              <span className="number">19</span>
              <span className="month">month</span>
            </h6>
            <p className="card-text">
              Far far away,behind the word mountains,far from the countries
              Vokalia and Consonantia,there live the blind texts.
            </p>
            <button className="card-btn"><span className="btn-text">Get Started</span></button>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Free</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span className="dollar">$</span>
              <span className="number">19</span>
              <span className="month">month</span>
            </h6>
            <p className="card-text">
              Far far away,behind the word mountains,far from the countries
              Vokalia and Consonantia,there live the blind texts.
            </p>
            <button className="card-btn"><span className="btn-text">Get Started</span></button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
