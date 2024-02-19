import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavBar from './navigation.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './products';
import Payment from './Payment';

import './style.css'

 

function App() {
  return (
    <div className="App">
    <NavBar/>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/Products" element={<Products />} />
            </Routes>
            <Routes>
                <Route path="/Payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
  

export default App;