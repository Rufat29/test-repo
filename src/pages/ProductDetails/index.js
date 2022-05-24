import React, { useEffect, useState } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../components/pages/Breadcrumb";

const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState([]);
  let [stockInfo] = useState([0]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      const prod = res.data;
      setCurrentProduct(prod);
    });
  }, [id]);

  if (currentProduct.unitsInStock > 0) {
    stockInfo = currentProduct.unitsInStock + " ədəd";
  } else {
    stockInfo = "Stokda məhsul yoxdur";
  }
  if (id > 78 || id <= 0) {
    return (
      <div className="container">
        <div className="not-found">
          {" "}
          <h1>
            {" "}
            Oops! Belə bir məhsul <br /> mağazamızda mövcud deyil.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb title={"Məhsul haqqında məlumat"}></Breadcrumb>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
            <div className="product-left-bar">
              <div className="product-img">
                <img src="../../../img/grocery-shopping.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 product-right-bar">
            <div className="product-right-bar">
              <h1>{currentProduct.productName}</h1>
              <div className="product-in justify-content-between">
                <h5 className="green-color">
                  {currentProduct.quantityPerUnit}
                </h5>
                <h5 className="gray-color">Stok: {stockInfo}</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo{" "}
              </p>
              <div className="product-info">
                <h4 className="green-color">{currentProduct.unitPrice} AZN</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
