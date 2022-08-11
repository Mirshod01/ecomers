import React from "react";
import "./BankCard.scss";

export const BankCard = ({ cardCode, setCardCode }) => {
  return (
    <div className="bank-card">
      <div className="flipper">
        <div className="card__front">
          <div className="card-number">
            <div className="title">Card number</div>
            <div className="card-number__inputs">
              <div>
                <input
                  type="text"
                  maxLength="4"
                  inputMode="numeric"
                  pattern="\d+"
                  placeholder="0000"
                  className="card-number-input"
                  onChange={(e) => {
                    setCardCode({ ...cardCode, first: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength="4"
                  inputMode="numeric"
                  pattern="\d+"
                  placeholder="0000"
                  className="card-number-input"
                  onChange={(e) => {
                    setCardCode({ ...cardCode, second: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength="4"
                  inputMode="numeric"
                  pattern="\d+"
                  placeholder="0000"
                  className="card-number-input"
                  onChange={(e) => {
                    setCardCode({ ...cardCode, third: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength="4"
                  inputMode="numeric"
                  pattern="\d+"
                  placeholder="0000"
                  className="card-number-input"
                  onChange={(e) => {
                    setCardCode({ ...cardCode, fourth: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="card-date">
            <div className="title">Valid thru</div>
            <div className="card-date__inputs">
              <div>
                <input
                  type="text"
                  maxLength="2"
                  inputMode="numeric"
                  pattern="\d+"
                  placeholder="00"
                  className="card-date-input"
                  onChange={(e) => {
                    setCardCode({ ...cardCode, fifth: e.target.value });
                  }}
                />
              </div>
              <div className="divider">/</div>
              <div>
                <input
                  type="text"
                  maxLength="2"
                  inputMode="numeric"
                  pattern="\d+"
                  placeholder="00"
                  className="card-date-input"
                  onChange={(e) => {
                    setCardCode({ ...cardCode, sixth: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="card-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="card__logo"
              width="140"
              height="43"
              viewBox="0 0 175.7 53.9"
            >
              <style>.visa</style>
              <path
                className="visa"
                d="M61.9 53.1l8.9-52.2h14.2l-8.9 52.2zm65.8-50.9c-2.8-1.1-7.2-2.2-12.7-2.2-14.1 0-24 7.1-24 17.2-.1 7.5 7.1 11.7 12.5 14.2 5.5 2.6 7.4 4.2 7.4 6.5 0 3.5-4.4 5.1-8.5 5.1-5.7 0-8.7-.8-13.4-2.7l-2-.9-2 11.7c3.3 1.5 9.5 2.7 15.9 2.8 15 0 24.7-7 24.8-17.8.1-5.9-3.7-10.5-11.9-14.2-5-2.4-8-4-8-6.5 0-2.2 2.6-4.5 8.1-4.5 4.7-.1 8 .9 10.6 2l1.3.6 1.9-11.3M164.2 1h-11c-3.4 0-6 .9-7.5 4.3l-21.1 47.8h14.9s2.4-6.4 3-7.8h18.2c.4 1.8 1.7 7.8 1.7 7.8h13.2l-11.4-52.1m-17.5 33.6c1.2-3 5.7-14.6 5.7-14.6-.1.1 1.2-3 1.9-5l1 4.5s2.7 12.5 3.3 15.1h-11.9zm-96.7-33.7l-14 35.6-1.5-7.2c-2.5-8.3-10.6-17.4-19.6-21.9l12.7 45.7h15.1l22.4-52.2h-15.1"
              />
              <path
                fill="#F7A600"
                d="M23.1.9h-22.9l-.2 1.1c17.9 4.3 29.7 14.8 34.6 27.3l-5-24c-.9-3.3-3.4-4.3-6.5-4.4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
