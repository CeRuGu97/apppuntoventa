import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Routes/Navbar';
import Sidebar from './components/Routes/Sidebar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Purchases from './pages/Purchases';
import './App.scss';
import AddProduct from './components/Purchases/AddProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/sales/addProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
