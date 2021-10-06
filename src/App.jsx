import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import NoteFound from "./Pages/NoteFound";
import Categories from "./Pages/Categories/Categories";
import Catalog from "./Pages/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./Context/FilterContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
}

export default App;
