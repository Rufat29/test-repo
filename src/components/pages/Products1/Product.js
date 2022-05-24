import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Product = ({ product, setProductName }) => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");

  const addToCart = (product) => {
    console.log("Aaa");
    setCart([...cart, { ...product }]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div className="card col-lg-4 col-md-6 col-sm-12">
      {/* <button>Go to cart ({cart.length})</button> */}
      <Link to={`/mehsullar/${product.id}`}>
        <img
          className="img-fluid"
          alt="100%x280"
          src="img/grocery-shopping.jpg"
        />
      </Link>

      <div className="card-body">
        <h4 className="card-title">
          {product.productName.slice(0, 15) + " ..."}{" "}
        </h4>

        <span className="card-number">{product.quantityPerUnit}</span>
        {/* <p className="card-text">
          Bakıdan gətirilmiş mal əti lorem Lorem ipsum dolor sit amet
        </p> */}
        <div className="card-price">
          <span>{product.unitPrice} AZN</span>
          <button onClick={() => addToCart(product)}>
            <span>Səbətə at</span>
            <img src="img/basket.svg" alt="" />
          </button>
          {/* <button onClick={() => removeFromCart(product)}>
              <span> at</span>
              <img src="img/basket.svg" alt="" />
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
