import React, { Component } from "react";
import "./index.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import ShareLink from "react-facebook-share-link";

export default class index extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="container">
            <div className="row mt-5 py-5">
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
                <Link to="/" className="footer-item-logo">
                  <img src="../../../img/logo-white.svg" alt="" />
                  <h3>KƏNDİ GƏTİR</h3>
                </Link>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
                <div className="footer-item">
                  <h3>Bizi izləyin</h3>
                  <div className="social-footer">
                    <ShareLink link="https://www.facebook.com/">
                      {(link) => (
                        <a href={link}>
                          <BsFacebook></BsFacebook>
                        </a>
                      )}
                    </ShareLink>
                    <ShareLink link="https://www.instagram.com/">
                      {(link) => (
                        <a href={link}>
                          <BsInstagram></BsInstagram>
                        </a>
                      )}
                    </ShareLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
                <div className="footer-item">
                  <h3>Əlaqə</h3>
                  <a href="/">
                    <span>+994551234567 <br/></span>
                  </a>
                  <a href="/">
                    <span>info@kendigetir.com</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
                <div className="footer-item">
                  <h3>Ünvan</h3>
                  <span>Atatürk prospekti 58 </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
