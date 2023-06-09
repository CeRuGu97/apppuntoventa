import { Layout, Home, About, Products, AddProduct } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/addProduct" element={< AddProduct/>} />
        <Route path="acerca" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
