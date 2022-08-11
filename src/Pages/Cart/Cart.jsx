import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearProductCart } from "../../redux/action-creator/cart";
import Navigate from "../../components/Navigate/Navigate";
import { useAuth0 } from "@auth0/auth0-react";
import { formatPrice } from "../../Utils/constants";
import { EmptyCard } from "../../components/EmptyCard/EmptyCard";

const Cart = () => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
      // localStorage.setItem("user", JSON.stringify(user));
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);

  const product = useSelector((state) => state.cartPage.cartProducts);
  const dispatch = useDispatch();

  const eachSubtotal = product.map((el) => {
    return el.subtotal;
  });
  let newSubtotal = 0;
  for (let i = 0; i <= eachSubtotal.length - 1; i++) {
    newSubtotal += Number(eachSubtotal[i]);
  }
  if (isLoading) {
    return <div>Loading... </div>;
  }
  return (
    <div>
      {product.length !== 0 ? (
        <div>
          <Navigate title={"/Cart"} />
          <div className="container">
            <div className="select__product">
              <div className="cart__title">
                <div className="cart__img">
                  <p>Item</p>
                </div>
                <div className="cart__ptice">
                  <p>Price</p>
                </div>
                <div className="cart_quantity">
                  <p>Quantity</p>
                </div>
                <div className="cart__subtotal">
                  <p>Subtotal</p>
                </div>
                <div className="cart__delete"></div>
              </div>
              <hr className="cart__title__line" />
              {product.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <hr style={{ marginTop: 50 }} />

              <div className="cart__btns">
                <Link to="/catalog" className="btn">
                  continue shopping
                </Link>

                <span
                  className="btn-clear"
                  onClick={() => {
                    dispatch(clearProductCart());
                  }}
                >
                  clear shopping cart
                </span>
              </div>

              <div className="subtotal">
                <div className="order__total__box">
                  <div className="subtotal__box">
                    <h4 className="order__total__box__title">Subtotal :</h4>{" "}
                    <h4 className="order__total__box__price">
                      {formatPrice(newSubtotal)}$
                    </h4>
                  </div>
                  <div className="subtotal__box">
                    <p className="order__total__box__title">Shipping Free :</p>{" "}
                    <p className="order__total__box__price">$5.34</p>
                  </div>
                  <hr />
                  <div
                    className="subtotal__box"
                    style={{
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <h3 className="order__total__box__title">Order Total :</h3>
                    <h3 className="order__total__box__price">
                      {formatPrice(newSubtotal - 534)}
                    </h3>
                  </div>
                </div>
                <div className="login__btn">
                  {myUser ? (
                    <Link to="/checkout" className={"link"}>
                      <button
                        className="btn"
                        style={{
                          width: "100%",
                          textAlign: "center",
                          margin: "0",
                        }}
                      >
                        Next
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="btn"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        margin: "0",
                      }}
                      onClick={() => loginWithRedirect()}
                    >
                      login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default Cart;
