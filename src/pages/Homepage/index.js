import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import Hero from "../../components/pages/Hero";
import Category from "../../components/pages/Categories/Category";
import Product from "../../components/pages/Products1/Product";
import Slider from "../../components/pages/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../CategoryList/index";

export default class index extends Component {
  state = {
    categoryTitle: "Kateqoriyalar",
    sliderTitle: "Kampaniyalar",
    productTitle: "Məhsullar",
    categories: [],
    products: [],
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    return (
      <div>
        <Hero></Hero>

        <Container>
          <div>
            <div className="title-category mt-5">
              <h1 className="mb-3">{this.state.sliderTitle}</h1>
              <Slider />
            </div>
          </div>
        </Container>
        <Container>
          <div className="title-category mt-5">
            <h1 className="mb-3">{this.state.productTitle}</h1>
            <Row>
              {this.state.products.map((product) => (
                <Product product={product}></Product>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
