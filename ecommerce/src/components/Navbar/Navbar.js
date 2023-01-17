import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="Navbar">
        <div>
          <h1 className="Titulo">Levanner</h1>
          <CartWidget />
          <Link to="/category/hombre" style={{ margin: 10}}>
            Perfumes para hombres
          </Link>
          <Link to="/category/mujer">Perfumes para mujeres</Link>
          <Link to="/" style={{ margin: 10 }}>
            Ver Todos
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
