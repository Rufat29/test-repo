import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";

const Category = ({ category, setSelectCategory, setCategoryName }) => {
  return (
    <div
      onClick={() => {setSelectCategory(category.id); setCategoryName(category.categoryName)}}
      className={`pt-2 mb-5  col-md-3`}
      id="category"
    >
      <div className="colored-bg-1 colored-main">
        <p>{category.categoryName}</p>
        <div className="colored-item">
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Category;
