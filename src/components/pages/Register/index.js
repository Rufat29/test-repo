import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

export default class index extends Component {
  state={
    title:"Qeydiyyat"
  }
  render() {
    return (
      <div>
        <Breadcrumb title={this.state.title}></Breadcrumb>
        <div className="container mt-5">
          <div className="login">
            <h3>Qeydiyyat</h3>
            <p>İstifadəçi məlumatlarınızı daxil edin. </p>
            <form action="">
              <input type="text" placeholder="Ad , Soyad" />
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
                <Link className="green-color text-right" to={"/login/condition"}>
                  İstifadəçi şərtləri
                </Link>
              </p>
              <button>Daxil ol</button>
              <p className="bottom-text">
                Hesabınız var?
                <Link className="green-color" to={"/login"}>
                  Daxil olun
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
