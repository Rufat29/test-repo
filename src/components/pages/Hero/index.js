import React, { Component } from "react";
import "./index.css";
// import Button from "../../core/button";
import "./index.css";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div className="main mt-5">
        <div className="row main-flex">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
            <div className="main-left">
              <h1>
                <b>"Kəndi Gətir"</b> ilə <br /> təbiətin qəlbindən <br /> evinizə.
              </h1>
              <span>
                Kəndi Gətir sadəcə mövsümə uyğun və <br /> kəndlərimizə məxsus
                organik məhsullar gətirir
              </span>
              <br />
              <a href="category.html">
                <Link to="/mehsullar">
                  <button className="white-rounded-btn">
                    Məhsullar səhifəsinə keçid
                    <img src="img/right-arrow.svg" alt="arrow" />
                  </button>
                </Link>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
            <div className="main-right">
              <img src="img/Group 294 1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
