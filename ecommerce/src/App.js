import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
/* import ItemCount from "./components/ItemCount/itemcount"; */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="!Bienvenidos a la perfumeria Levanner¡" />
  {/*     <ItemCount /> */}
    </div>
  );
}

export default App;
