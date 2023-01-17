import { useState } from "react";

const ItemCount = ({ initial = 1, stock }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  /* /*   const reset = () => {
    setCount(0); 
  }; */
  return (
    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      {/*     <button onClick={reset}>reset</button> */}
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
