import "./App.css";
import { Main } from "./components/Main";
import NavbarItem from "./components/NavbarItem";
import { heroapi } from "./data/data";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { AllComponent } from "./components/AllComponent";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllComponent />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
