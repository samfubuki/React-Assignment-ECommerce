import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import { productData, productDataFive, productDataFour, productDataThree, productDataTwo } from './components/Products/data';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Products heading='T-Shirts' data={productData} />
        <Products heading='Curtains' data={productDataTwo} />
        <Products heading='Trousers' data={productDataThree} />
        <Products heading='Pizza' data={productDataFour} />
        <Products heading='Sweets' data={productDataFive} />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
