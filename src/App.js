
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Shop';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import 'rsuite/dist/rsuite.min.css';


function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/product' element={<Products/>}>
        <Route path=':productId' element={<Products/>}/>
      </Route>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/loginsign' element={<loginsign/>}/>
    </Routes>
   
     </BrowserRouter>
    </div>
  );
}

export default App;
