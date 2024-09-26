import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from './Components/Navbar/NavbarComp';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContextProvider';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <Router>
        <ShopContextProvider>
          <NavbarComp />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
            <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
            <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid' />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSingup />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
