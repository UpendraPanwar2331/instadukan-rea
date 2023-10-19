import React, { useContext } from 'react'

import { Mycontext } from '../App';
import { Link } from 'react-router-dom';
import "../Styles/Header.css"
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
    const {count} = useContext(Mycontext);
  
    
  return (
    <div>
       <div className="containermain">
      <header className="header">
        <div className="left">
          <h2   className="logo"> Ferry Products  </h2>
          {/* <input
            className="input-search"
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            value={inputValue}
            onChange={handleInputChange}
          
          /> */}
        </div>
        <div className="right-side">
          <div className="profilepart" >
          </div>
          <div className="profilepart">
            <div className="cartIcon">
            <Link to="/cart">
          <ShoppingCartOutlined style={{ fontSize: '24px',color:'white' }} />
        </Link>
              {count > 0 && <span className="counter">{count}</span>}{" "}
            </div>
            <div className="cart">Cart</div>
          </div>
        </div>
      </header>

    

     
      </div>
    </div>
  )
}

export default Header
