import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* import { getProductById } from "../asyncMock"; */
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [products, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      const productRef = doc(db, "products", productId);

      try {
        const snapshot = await getDoc(productRef);

        const fields = snapshot.data();
        const productAdapted = { id: snapshot.id, ...fields };

        setProduct(productAdapted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [productId]);

  if (loading) {
    return <h1>Cargando... </h1>;
  }

  return (
    <div className="div-2">
      <h1 className="detalle">Detalle del producto</h1>
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
