import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

export default class index extends Component {
  state = {
    title:"Daxil ol"
  }
  render() {
    return (
      <div>
        <Breadcrumb title={this.state.title}></Breadcrumb>
        <div className="container mt-5">
          <div className="login">
            <h3>Daxil ol</h3>
            <p>İstifadəçi məlumatlarınızı daxil edin. </p>
            <form action="">
              <input
                type="text"
                required=""
                name="phone_number"
                className="form-control"
                data-slots="_"
                placeholder="+994 (__) ___-__-__"
                minLength="19"
              />
              <input type="password" placeholder="Şifrə" />
              <p>
                <Link className="green-color text-right" to={"/login/forgetpassword"}>
                  Şifrəni unutmusan?
                </Link>
              </p>
              <button>Daxil ol</button>
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
