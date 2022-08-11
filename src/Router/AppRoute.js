import React from "react";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories/Categories";
import Catalog from "../Pages/Catalog/Catalog";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";

export const privateRoutes = [
  { index: "index", element: <Home /> },
  { path: "catalog", element: <Catalog /> },
  { path: "categories", element: <Categories /> },
  { path: "catalog/:id/", element: <SingleProduct /> },
  { path: "cart", element: <Cart /> },
];
