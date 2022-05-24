import React, { Component, useEffect, useState } from "react";
import "../../components/pages/Categories/index.css";
import Category from "../../components/pages/Categories/Category";
import { Container, Row } from "reactstrap";
import Breadcrumb from "../../components/pages/Breadcrumb";
import axios from "axios";
import { Link } from "react-router-dom";
export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/categories`).then((res) => {
      const categories = res.data;
      setCategoryList(categories);
    });
  }, []);

  return (
    <div>
      <Breadcrumb title={"Kateqoriyalar"}></Breadcrumb>
      <div className="container mt-5" id="categories">
        <Container>
          <Row>
            {categoryList.map((category) => (
              <Category key={category.id} md={"col-md-3"} category={category} />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
