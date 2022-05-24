import React, { Component } from "react";
import "./index.css";
import Breadcrumb from "../../components/pages/Breadcrumb";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Haqqımızda",
      aboutCards: [
        {
          aboutCardId: 1,
          aboutCardTitle: "Çatdırılma",
          aboutCardText:
            "Lorem ipsum dolor sit amet, consectetur adipisfdgd.",
          aboutCardSrc: "img/free-delivery 1.svg",
        },
        {
          aboutCardId: 2,
          aboutCardTitle: "Sərfəli qiymətlər",
          aboutCardText:
          "Lorem ipsum dolor sit amet, consectetur adipisfdgd.",
          aboutCardSrc: "img/cashback 1.svg",
        },
        {
          aboutCardId: 3,
          aboutCardTitle: "Yüksək keyfiyyət",
          aboutCardText:
            "Lorem ipsum dolor sit amet, consectetur adipisfdgd.",
          aboutCardSrc: "img/premium-quality 1.svg",
        },
        {
          aboutCardId: 4,
          aboutCardTitle: "7/24 fəaliyyət",
          aboutCardText:
          "Lorem ipsum dolor sit amet, consectetur adipisfdgd.",
          aboutCardSrc: "img/24-hours-support 1.svg",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Breadcrumb title={this.state.title}></Breadcrumb>

        <section id="About">
          <div className="container">
            <div className="row my-5 about">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 craft">
                <div className="about-left">
                  <img className="img-fluid" src="img/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-right">
                  <h1>
                    <b>Kəndi Gətir</b> ilə təbiətin qəlbindən evinizə.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo laboris nisi ut aliquip ex ea
                    commodoaliquip ex ea commodo
                  </p>
                  <button>
                    Bizimlə əlaqə saxlayın <img src="img/mobile.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Features">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="features-title">
                  <h1>Özəlliklərimiz</h1>
                </div>
              </div>
            </div>
            <div className="row my-4">
              {this.state.aboutCards.map((aboutCard) => (
                <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12 col-12">
                  <div className="features-card">
                    <img src={aboutCard.aboutCardSrc} alt="" />
                    <div className="features-card-body">
                      <h4>{aboutCard.aboutCardTitle}</h4>
                      <p>{aboutCard.aboutCardText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
