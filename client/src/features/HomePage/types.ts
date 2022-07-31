export type ParamsType = {
  [key: string]: string;
};

export type productsType = {
  title: string;
  price: string;
  image: string;
  param: Array<ParamsType>;
};
