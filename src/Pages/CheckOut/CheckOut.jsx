import React, { useState } from "react";
import Navigate from "../../components/Navigate/Navigate";
import { useSelector } from "react-redux";
import { EmptyCard } from "../../components/EmptyCard/EmptyCard";
import { formatPrice } from "../../Utils/constants";
import "./CheckOut.scss";
import BankCard from "../../components/BankCard/BankCard";
const CheckOut = () => {
  const product = useSelector((state) => state.cartPage.cartProducts);

  const eachSubtotal = product.map((el) => {
    return el.subtotal;
  });
  let newSubtotal = 0;
  for (let i = 0; i <= eachSubtotal.length - 1; i++) {
    newSubtotal += Number(eachSubtotal[i]);
  }
  let orderTotal = formatPrice(newSubtotal - 534);

  const userProfile = localStorage.getItem("user");

  let user = JSON.parse(userProfile);

  const [cardCode, setCardCode] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });

  const [togle, setTogle] = useState(true);

  const toPay = () => {
    if (
      cardCode.first.length === 4 &&
      cardCode.second.length === 4 &&
      cardCode.third.length === 4 &&
      cardCode.fourth.length === 4 &&
      cardCode.fifth.length === 2 &&
      cardCode.sixth.length === 2
    ) {
      setTogle(false);
    } else {
      console.log("to'ldirilmadi");
    }
  };
  let nma = false;
  return (
    <div>
      <Navigate title={"/checkout"} />
      {/* {product.length !== 0 ? ( */}
      {nma === false ? (
        <div>
          <div className="container">
            <div className="checkOute">
              <div className="checkOute-title">
                <h1>Hello, {user.name}</h1>
                <p>Your total is {orderTotal}</p>
                <p>Test Card Number: 4242 4242 4242 4242</p>
              </div>
              <div className="checkOute-card">
                <BankCard
                  // togle={togle}
                  cardCode={cardCode}
                  setCardCode={setCardCode}
                />
                <button className="btn" onClick={toPay}>
                  Pay
                </button>
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

export default CheckOut;
