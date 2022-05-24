import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="container for-scroll">
          <div className="own-info">
            <ul>
              <li>
                <RouterNavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/order"}
                >
                  Sifarişlər
                </RouterNavLink>
              </li>
              <li>
                <RouterNavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/profil"}
                >
                  Hesab məlumatları
                </RouterNavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
