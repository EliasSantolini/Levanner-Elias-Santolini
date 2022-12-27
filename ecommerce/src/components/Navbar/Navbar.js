import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="Titulo">Levanner</h1>
      <div>
        <button>Perfumes para hombres</button>
        <button>Perfumes para mujeres</button>
        <button>Todos los perfumes</button>
      </div>
    </nav>
  );
};

export default Navbar;
