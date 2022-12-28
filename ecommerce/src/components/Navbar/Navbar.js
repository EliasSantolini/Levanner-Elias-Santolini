import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="Titulo">Levanner</h1>
      <div>
        <CartWidget />
        <ItemListContainer greeting="!Bienvenidos A La Perfumeria Levanner¡"/>
        <button>Perfumes para hombres</button>
        <button>Perfumes para mujeres</button>
        <button>Todos los perfumes</button>
      </div>
    </nav>
  );
};

export default Navbar;
