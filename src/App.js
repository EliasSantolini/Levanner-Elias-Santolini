import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/AppRouter";
import { CartProvider } from "./context/CartContex";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
          <Navbar />
          <AppRouter />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
