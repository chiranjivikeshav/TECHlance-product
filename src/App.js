import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Productdetail from './components/Productdetail';
import ProductSmallScreen from './components/ProductSmallScreen';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  // .........LIGHT AND DARK MODE................
  const [Mode, setMode] = useState('white');
  const enableDarkMode = () => {
    if (Mode === "white") {
      setMode("black");
    }
    else {
      setMode("white");
    }
  }

  return (
    <>
      <Navbar mode={Mode} enablemode={enableDarkMode} />
      <Slider />
      <Social />
      <div className='Laptop'>
        <Productdetail mode={Mode} />
      </div>
      <div className='Mobile'>
        <ProductSmallScreen mode={Mode} />
      </div>
      <Footer />
    </>

  );
}

export default App;
