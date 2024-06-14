import "./App.css";
import Products from "./pages/Products";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Pages from "./pages/Pages";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
