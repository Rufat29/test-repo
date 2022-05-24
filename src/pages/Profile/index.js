import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Orders from "../../components/pages/Orders";
import Breadcrumb from "../../components/pages/Breadcrumb";
import ProfNav from "../../components/pages/ProfNav";

export default class index extends Component {
  state = {
    title: "Hesab məlumatları"
  }
  render() {
    return (
      <div>
        <Breadcrumb title={this.state.title}></Breadcrumb>
        <ProfNav></ProfNav>

        <div className="container ">
          <div className="info-section">
            <div className="account-form">
              <h4>
                Hesab məlumatlarını <br /> yenilə
              </h4>
              <form action="">
                <label for="">Ad,Soyad</label>
                <input type="text" placeholder="Ad" />
                <label for="">Nömrə</label>
                <input
                  type="text"
                  required=""
                  name="phone_number"
                  className="form-control"
                  data-slots="_"
                  placeholder="+994 (__) ___-__-__"
                  minlength="19"
                />

                <button>Yadda saxla</button>
              </form>
            </div>
            <div className="account-form">
              <h4>Şifrəni yenilə</h4>
              <form action="">
                <label for="">Mövcud şifrəni daxil edin</label>
                <input type="password" />
                <label for="">Yeni şifrə yarat</label>
                <input type="password" />
                <label for="">Şifrəni təsdiqlə</label>
                <input type="password" />
                <button>Yadda saxla</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
