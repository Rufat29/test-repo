import React, { Component } from "react";
import "./index.css";

const Breadcrumb = ({ title, productCount }) => {
  return (
    <div className="blue-bg">
      <div className="container py-4">
        <div className="profile-header">
          <div className="product-in">
            <h1>{title}</h1>
            <h5> {productCount} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
