import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 pass">
          <div className="login">
            <h3>Yeni şifrə</h3>
            <p>Yeni şifrəni təyin edin.</p>
            <form action="">
              <input type="password" placeholder="Şifrə" />
              <input type="password" placeholder="Təkrar şifrə" />
              <button>Təsdiqlə</button>
              <p className="bottom-text">
                Hesabınız yoxdur?
                <Link className="green-color" to={"/login/register"}>
                  Qeydiyyatdan keçin
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
