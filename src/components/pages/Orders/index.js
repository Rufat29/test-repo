import React, { Component } from "react";
import "./index.css";
import Breadcrumb from "../../../components/pages/Breadcrumb";
import ProfNav from "../../../components/pages/ProfNav";

export default class index extends Component {
  state = {
    title: "Sifarişlər",
  };
  render() {
    return (
      <div>
        <Breadcrumb title={this.state.title}></Breadcrumb>
        <ProfNav></ProfNav>
        <section id="Buy-order">
          <div className="container mt-5">
            <div className=" mar-no buy-order">
              <div className="buy-order-inner">
                <div>
                  <p>Məhsul</p>
                </div>
                <div>
                  <p>Sifariş No</p>
                </div>
                <div>
                  <p>Tarix</p>
                </div>
                <div>
                  <p>Qiymət</p>
                </div>
              </div>
              <div className="comment-line-1"></div>
              <div>
                <div className="buy-order-history">
                  <div>
                    <p>Mal əti</p>
                  </div>
                  <div>
                    <p>458796</p>
                  </div>
                  <div>
                    <p>24.15.2021</p>
                  </div>
                  <div>
                    <p className="font-600">300 AZN</p>
                  </div>
                </div>
                <div className="comment-line-1"></div>
              </div>
              <div>
                <div>
                  <div className="buy-order-history">
                    <div>
                      <p>Mal əti</p>
                    </div>
                    <div>
                      <p>458796</p>
                    </div>
                    <div>
                      <p>24.15.2021</p>
                    </div>
                    <div>
                      <p className="font-600">300 AZN</p>
                    </div>
                  </div>
                  <div className="comment-line-1"></div>
                </div>
                <div className="comment-line-1"></div>
              </div>
              <div>
                <div>
                  <div className="buy-order-history">
                    <div>
                      <p>Mal əti</p>
                    </div>
                    <div>
                      <p>458796</p>
                    </div>
                    <div>
                      <p>24.15.2021</p>
                    </div>
                    <div>
                      <p className="font-600">300 AZN</p>
                    </div>
                  </div>
                  <div className="comment-line-1"></div>
                </div>
                <div className="comment-line-1"></div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-md modal-dialog-scrollable ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Sifariş detalları
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="far fa-times-circle"></i>
                </button>
              </div>
              <div className="modal-body order-info-modal">
                <h5 className="modal-title">Məhsullar</h5>
                <div className="modal-inner">
                  <div>
                    <p>
                      Mal əti <span>300qr</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-600">300 AZN</p>
                  </div>
                </div>
                <div className="modal-inner">
                  <div>
                    <p>
                      Mal əti <span>300qr</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-600">300 AZN</p>
                  </div>
                </div>
                <div className="modal-inner">
                  <div>
                    <p>
                      Mal əti <span>300qr</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-600">300 AZN</p>
                  </div>
                </div>
                <div className="modal-inner">
                  <div>
                    <p className="font-600">Cəmi:</p>
                  </div>
                  <div>
                    <p className="font-600">900 AZN</p>
                  </div>
                </div>
                <h5 className="modal-title">Çatdırılma ünvanı</h5>
                <div className="modal-inner">
                  <div>
                    <p>Ünvan</p>
                  </div>
                  <div>
                    <p className="font-600">Fətəli xan xoyski,22</p>
                  </div>
                </div>
                <h5 className="modal-title">Ödəniş</h5>
                <div className="modal-inner">
                  <div>
                    <p>Ödəniş növü</p>
                  </div>
                  <div>
                    <p className="font-600">Yerində bank kartı ilə</p>
                  </div>
                </div>
                <div className="modal-inner">
                  <div>
                    <p>Ödəniş id-si</p>
                  </div>
                  <div>
                    <p className="font-600">123123123123</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Bağla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
