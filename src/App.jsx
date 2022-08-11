import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import NoteFound from "./Pages/NoteFound";
import Categories from "./Pages/Categories";
import Catalog from "./Pages/Catalog";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Cart from "./Pages/Cart/Cart";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/action-creator/product";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="catalog/:id/" element={<SingleProduct />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>

        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
}

export default App;
