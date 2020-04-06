import React, { Component } from "react";
import Navbar from "./components/navbarContainer/Navbar";
import NavbarContaint from "./components/navbarContainer/NavbarContaint";
import Features from "./components/Features";
import Design1 from "./components/design/Design1";
import Design2 from "./components/design2/Design2";
import Review from "./components/Review";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";
///comment......
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NavbarContaint />
        <Features />
        <Design1 />
        <Design2 />
        <Review />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    );
  }
}
