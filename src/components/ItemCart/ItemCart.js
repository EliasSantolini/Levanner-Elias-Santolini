import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import "./ItemCart.css";
const ItemCart = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article style={{ display: "flex", justifyContent: "space-around" }}>
      <h3>{name}</h3>
      <h4>cantidad: {quantity}</h4>
      <h5>precio: ${price}</h5>
      <h4>Subtotal: ${price * quantity}</h4>
      <button className="option" onClick={() => removeItem(id)}>
        ❌
      </button>
    </article>
  );
};

export default ItemCart;
