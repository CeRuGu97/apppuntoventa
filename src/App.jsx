import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Routes/Navbar';
import Sidebar from './components/Routes/Sidebar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Purchases from './pages/Purchases';
import './App.scss';
import AddProduct from './components/Products/AddProduct';
import Products from './pages/Products';
import AddUser from './components/Home/AddUser';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path='/products' element={<Products />} />
            <Route path="/products/addProduct" element={<AddProduct />} />
            <Route path="/addUser" element={<AddUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
