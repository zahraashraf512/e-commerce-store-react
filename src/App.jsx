
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;