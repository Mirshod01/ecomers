import { useState } from "react";
import "./Saidbar.scss";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  UnorderedListOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Saidbar = () => {
  const [swichToggled, setSwichToggled] = useState(false);
  const showLibrory = () => {
    swichToggled ? setSwichToggled(false) : setSwichToggled(true);
  };

  const userProfile = localStorage.getItem("user");
  let user = JSON.parse(userProfile);

  return (
    <div className="saidbar">
      <div className={swichToggled ? "item" : "item-shadow"}>
        <h2 className="open">
          {" "}
          {swichToggled ? (
            <CloseOutlined onClick={showLibrory} />
          ) : (
            <UnorderedListOutlined onClick={showLibrory} />
          )}
        </h2>
        <div className="icons">
          <HeartOutlined
            className="saidbar-open"
            style={{ fontSize: 28, marginLeft: 10, cursor: "pointer" }}
          />
          <Link to="/cart">
            <ShoppingCartOutlined
              style={{
                color: "var(--clr-black)",
                fontSize: 28,
                marginLeft: 10,
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
      </div>

      <div className={swichToggled ? "hideLibrary" : "showLibrary"}>
        <h3>
          <NavLink to="/" onClick={showLibrory} className="saidbar-item">
            Home
          </NavLink>
        </h3>

        <h3>
          <NavLink
            to="/categories"
            onClick={showLibrory}
            className="saidbar-item"
          >
            {" "}
            Categories
          </NavLink>
        </h3>
        <h3>
          <NavLink to="/catalog" onClick={showLibrory} className="saidbar-item">
            {" "}
            Catalog
          </NavLink>
        </h3>
        {user ? (
          <h3>
            <NavLink
              to="/checkout"
              onClick={showLibrory}
              className="saidbar-item"
            >
              {" "}
              Checkout
            </NavLink>
          </h3>
        ) : (
          ""
        )}

        <div className="contact">
          <h3>
            <PhoneOutlined />{" "}
            <a
              href="tel:+99897 111-57-52"
              className="link"
              onClick={showLibrory}
            >
              (97) 007-57-52
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Saidbar;
