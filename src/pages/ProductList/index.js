import React, { useEffect, useState, useParams } from "react";
import "./index.css";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Breadcrumb from "../../components/pages/Breadcrumb";
import Product from "../../components/pages/Products1/Product";
import Category from "../../components/pages/Categories/Category";

export default function ProductList() {
  const [stateProducts, setStateProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState(0);
  const [categoryName, setCategoryName] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/categories`).then((res) => {
      const categories = res.data;
      setCategoryList(categories);
    });

    axios.get("http://localhost:3000/products").then((res) => {
      const products = res.data;
      setProducts(products);
    });
  }, []);

  useEffect(() => {
    setStateProducts(products);
  }, [products]);

  useEffect(() => {
    setStateProducts(
      products.filter((product) => product.categoryId === selectCategory)
    );
  }, [selectCategory, categoryName]);

  return (
    <div>
      <Breadcrumb
        title={"Məhsullar"}
        productCount={"( " + products.length + " məhsul tapıldı " + " )"}
      ></Breadcrumb>
      <Container className="mt-5">
        <Row>
          {categoryList.map((category) => (
            <Category
              category={category}
              setSelectCategory={setSelectCategory}
              key={category.id}
              setCategoryName={setCategoryName}
            />
          ))}
          <div className="product-in">
            <p>{categoryName}</p>{" "}
            <p>( {stateProducts.length} Məhsul tapıldı )</p>
          </div>
        </Row>
        <Row>
          {stateProducts.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
}
