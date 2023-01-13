import "./ItemListContainer.css";
import { getProducts } from "../asyncMock";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const productsMod = products.map((prod) => <li> {prod.name}</li>);

  console.log(productsMod);

  return (
    <div>
      <h1>{greeting}</h1>
      <ul>{productsMod}</ul>
    </div>
  );
};

export default ItemListContainer;
