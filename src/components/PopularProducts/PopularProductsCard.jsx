import React from "react";
import "antd/dist/antd.css";
import "../../assets/styles/main.css";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { formatPrice } from "../../Utils/constants";

const PopularProductsCard = ({
  image,
  name,
  category,
  price,
  shipping,
  id,
}) => {
  return (
    <div>
      <div className="product-card">
        <Image src={image} className="product-card-image" />
        <div className="card-main">
          <Link to={`/catalog/${id}`}>
            <div className="card-all-title">
              <div className="card-top-title">
                <h3>{name}</h3>
                <h4>{category}</h4>
                <div className="card-title">
                  <div className="input-box">
                    <input
                      type="checkbox"
                      onChange={(e) => console.log(e.target.value)}
                      checked={shipping ? "completed" : ""}
                    />
                    <p>{shipping ? "In stock" : "Out of stock"}</p>
                  </div>
                  <span>SALE</span>
                </div>
              </div>
              <div className="price">
                <h3 className="card-price">{formatPrice(price)} </h3>
                <h4 className="last-price">
                  {formatPrice(Math.floor(price * 1.1))}
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsCard;
