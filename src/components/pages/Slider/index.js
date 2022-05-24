import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";

export default class index extends Component {
  state = {
    sliders: [],
  };
  componentDidMount() {
    this.getSliders();
  }
  getSliders = () => {
    fetch("https://kendigetir.az/api/index")
      .then((response) => response.json())
      .then((data) => this.setState({ sliders: data.slider }));
  };
  render() {
    return (
      <div>
        <Swiper slidesPerView={1}>
          {this.state.sliders.map((slider) => (
            <SwiperSlide>
              <img className="slider-image" src={slider.item_img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
