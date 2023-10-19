
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
import Homepage from './Component/Homepage';
import Cart from './Component/Cart';
import React, { createContext, useState } from 'react';
import Header from './Component/Header';
export const Mycontext = React.createContext();

function App() {
 
  const [passengers, setPassengers] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(0);
  const addPassenger = (passenger) => {
    
    setPassengers((prevPassengers) => [...prevPassengers, passenger]);
  };
  return (
    
       <Mycontext.Provider value={{passengers, addPassenger, selectedProduct, setSelectedProduct,count,setCount}}>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      </Mycontext.Provider>
  
  );
}

export default App;
