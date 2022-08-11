export const products_url = "https://course-api.com/react-store-products";
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(number / 100);
};
