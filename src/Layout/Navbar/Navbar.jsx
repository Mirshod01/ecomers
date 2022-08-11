import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoTop.png";
import "./Navbar.scss";
import "../../assets/styles/main.css";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { PhoneOutlined, HeartOutlined } from "@ant-design/icons";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading";

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "");

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

  const allProductsStok = useSelector((state) => state.cartPage.cartProducts);

  const stock = allProductsStok.map((el) => {
    return el.stock;
  });
  let result = 0;
  for (let i = 0; i <= stock.length - 1; i++) {
    result += stock[i];
  }

  // if (isLoading) {
  //   return <Loading />;
  // }
  let nma = true;
  return (
    <div className="nav">
      <div className="container">
        <div className="row">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" className={"link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={"link"}>
                {" "}
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={"link"}>
                {" "}
                Catalog
              </NavLink>
            </li>
            {nma === true ? (
              <li>
                <NavLink to="/checkout" className={"link"}>
                  {" "}
                  Checkout
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="row">
            <p className="phone">
              <PhoneOutlined className="phone-icon" />
              <a href="tel:+99897 111-57-52" className="phone-icon">
                (97) 007-57-52
              </a>
            </p>
            <div className="icons">
              <div className="icon">
                <HeartOutlined className="icon" />
              </div>

              <div className="icon">
                <Link to="/cart">
                  {" "}
                  <Badge count={result}>
                    <i className="cart arrow down icon"></i>
                  </Badge>
                </Link>
              </div>

              {/* {user ? ( */}
              {nma ? (
                <div
                  className="icon"
                  onClick={() => {
                    logout();
                  }}
                >
                  <PersonRemoveOutlinedIcon className="icaon-name" />
                  {/* <svg data-testid="DeleteIcon"></svg> */}
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    loginWithRedirect();
                  }}
                >
                  <PersonAddAltOutlinedIcon className="icaon-name" />
                  {/* <svg data-testid="DeleteIcon"></svg> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
