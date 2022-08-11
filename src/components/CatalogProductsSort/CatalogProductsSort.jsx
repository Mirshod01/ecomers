import "./CatalogProductsSort.scss";

const CatalogProductsSort = ({ productsLength, newData, setNewData }) => {
  const sortProducts = (event) => {
    let data = newData;
    if (event.target.value === "ABD") {
      data = data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setNewData(data);
    }
    if (event.target.value === "DBA") {
      data = data.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      setNewData(data);
    }

    if (event.target.value === "Highest") {
      newData.sort(function (a, b) {
        return b.price - a.price;
      });
      setNewData(newData);
    }
    if (event.target.value === "Lowest") {
      newData.sort(function (a, b) {
        return a.price - b.price;
      });
      setNewData(newData);
    }
  };

  return (
    <div className="catalog-products-sort">
      <div className="catalog-products-sort-icons">
        <span className="catalog-products-sort-icons-title">
          <p> {productsLength} Products Found</p>
        </span>
      </div>
      <hr className="catalog-line" />
      <div className="catalog-products-sort-select">
        <p className="catalog-products-sort-select-title">Sort By</p>
        <select name="" id="" onChange={(e) => sortProducts(e)}>
          <option value="Lowest">Prisce (Lowest)</option>
          <option value="Highest"> Prisce (Highest)</option>
          <option value="ABD"> Name (A-Z)</option>
          <option value="DBA">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default CatalogProductsSort;
