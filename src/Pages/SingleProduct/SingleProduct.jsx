import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Rate } from "antd";
import "./SingleProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import Navigate from "../../components/Navigate/Navigate";
import { formatPrice } from "../../Utils/constants";
import {
  getSingleProduct,
  removeSingleProduct,
  addProductToCart,
} from "../../redux/action-creator/cart";
import Loading from "../../components/Loading/Loading";

const SingleProduct = () => {
  const singleProduct = useSelector((state) => state.cartPage.singleProduct);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [productNumber, setProductNumber] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (singleProduct && singleProduct !== "") dispatch(getSingleProduct(id));
    return () => {
      dispatch(removeSingleProduct());
    };
  }, [id]);

  const {
    name,
    price,
    shipping,
    colors,
    reviews,
    stars,
    description,
    company,
    images,
    stock,
  } = singleProduct;
  const incrementProduct = () => {
    let amount = stock;
    if (amount > productNumber) {
      setProductNumber(productNumber + 1);
    }
  };
  const decrementProduct = () => {
    if (productNumber > 1) {
      setProductNumber(productNumber - 1);
    }
  };

  const addToCart = () => {
    dispatch(addProductToCart(selectedColor, productNumber, singleProduct));
  };
  return (
    <div>
      {Object.keys(singleProduct).length === 0 ? (
        <Loading />
      ) : (
        <div>
          <Navigate product={name} />
          <div className="single__product">
            <div className="container">
              <div className="single__product__box">
                <Link to="/catalog" className="btn">
                  back to ptoducts
                </Link>
                <div className="product__detail">
                  <div className="product__detail__images">
                    <img src={images[0].url} alt="" />
                  </div>
                  <div className="product__detail__main">
                    <h1>{name}</h1>
                    <div className="product__detail__main__rate">
                      <Rate
                        disabled
                        defaultValue={stars}
                        className="product__detail__main__rate__icon"
                      />
                      <p>({reviews} customer reviews)</p>
                    </div>
                    <h3>{formatPrice(price)} </h3>
                    <p>{description}</p>
                    <div className="product__detail__main__info">
                      <b>Available :</b>{" "}
                      <p>{shipping === true ? "In Stok" : "Out Of Stock"}</p>
                    </div>
                    <div className="product__detail__main__info">
                      <b>SKU:</b>
                      <p>{id}</p>
                    </div>
                    <div className="product__detail__main__info">
                      <b>Brand:</b>
                      <p>
                        {company.slice(0, 1).toUpperCase() + company.slice(1)}
                      </p>
                    </div>
                    <hr />

                    {stock > 0 ? (
                      <div>
                        <div className="sincgle__page__color">
                          <b>Colors:</b>
                          <div className="sincgle__page__color__box">
                            {colors.map((color, index) => {
                              if (!selectedColor && index === 0) {
                                setSelectedColor(color);
                              }
                              return (
                                <div
                                  key={index}
                                  name="color"
                                  className={`sincgle__page__color__item ${
                                    selectedColor === color &&
                                    "sincgle__page__color__item__active"
                                  }`}
                                  onClick={() => {
                                    setSelectedColor(color);
                                  }}
                                  style={{ backgroundColor: color }}
                                >
                                  {selectedColor === color ? (
                                    <i className="check icon"></i>
                                  ) : null}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <h2
                          style={{
                            cursor: "pointer",
                            fontWeight: 800,
                            marginLeft: 20,
                            marginBottom: "1rem",
                          }}
                        >
                          {" "}
                          <button
                            className="amount__btn"
                            onClick={decrementProduct}
                          >
                            -
                          </button>{" "}
                          {productNumber}{" "}
                          <button
                            className="amount__btn"
                            onClick={incrementProduct}
                          >
                            +
                          </button>
                        </h2>
                        <Link to="/cart" className="btn" onClick={addToCart}>
                          add to cart
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
