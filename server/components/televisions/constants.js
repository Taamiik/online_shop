const urlParent = "https://www.citilink.ru/catalog/televizory/";
const start = ".product_data__gtm-js";

const paths = {
  title: ".ProductCardHorizontal__title",
  prices: ".ProductCardHorizontal__price_current-price",
  images: ".ProductCardHorizontal__picture > img",
  description: ".ProductCardHorizontal__properties_item",
  param: {
    name: ".ProductCardHorizontal__properties_name",
    value: ".ProductCardHorizontal__properties_value",
  },
};

module.exports = {
  urlParent,
  paths,
  start,
};
