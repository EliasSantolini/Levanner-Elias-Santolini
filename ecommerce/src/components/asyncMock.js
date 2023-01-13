const products = [
  {
    id: 1,
    name: "Toy Boy de Moschino",
    category: "Perfume",
    price: "17.895 $",
    desc: "Fragancia olfativa Amaderada para Hombres, de 150 Ml .",
    stock: 15,
    img: "https://farmaonline.vteximg.com.br/arquivos/ids/314089-450-450/30-ML.jpg?v=637746778215270000",
  },
  {
    id: 2,
    name: "Tommy Girl de Tommy Hilfiger",
    category: "Perfume",
    price: "9.580 $",
    desc: "Fragancia olfativa Floral Frutal para Mujeres, de 100 Ml.",
    stock: 20,
    img: "https://dqm4sv5xk0oaj.cloudfront.net/products/29253/large/open-uri20201209-25224-1kdllhx.?1607515356",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};


export const getProductss = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
