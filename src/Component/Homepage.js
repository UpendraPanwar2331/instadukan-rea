import React, { useState, useContext } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { products } from '../Data/Data';
import '../Styles/Homepage.css';
import { Mycontext } from '../App';
import { ShoppingOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

const Homepage = () => {
  const {addPassenger, selectedProduct, setSelectedProduct } = useContext(Mycontext);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [passengers, setPassengers] = useState([
    {
      traveldate: '',
      name: '',
      email: '',
      age: '',
      gender: '',
      nationality: '',
      passportNumber: '',
      productId: null,
    },
  ]);

  const handleCardClick = (selectedProduct) => {
    setProduct(selectedProduct);
    setSelectedProduct(selectedProduct);
    setModal(true);
  };

  const handleCloseModal = () => {
    setProduct(null);
    setSelectedProduct(null);
    setModal(false);
  };

  const handleInputChange = (key, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[0][key] = value;
      return updatedPassengers;
    });
  };
  const handleAddPassenger = () => {
    const newPassenger = {
      traveldate: passengers[0].traveldate,
      name: passengers[0].name,
      email: passengers[0].email,
      age: passengers[0].age,
      gender: passengers[0].gender,
      nationality: passengers[0].nationality,
      passportNumber: passengers[0].passportNumber,
      productId: selectedProduct.id, // Set the productId
    };
   

    // Add the passenger data to the context along with the selected product name
    addPassenger(newPassenger, selectedProduct);
    alert("Passenger is added in the Cart")
    setModal(false);
  };
  function getFormattedCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <>
    
    <div className='homepageCon'>
    <div className='imagee'>
      <div className='inside-container'>
       
        <h4 class="wp-block-heading fade-in-up has-text-color" style={{color:'#ffd100'}}>
          <strong><strong>Ferry Accommodation Specialist</strong></strong></h4>
          <h1 className="aboutus">About Us</h1>
       

      </div>
     </div>
     
     <div className="product-list-container">
     <div className="product-list" style={{ paddingTop: '9px' }}>
  {products.map((item) => (
    <div className="product-card" key={item.id}>
      <Card
        hoverable
        style={{ width: 500 }}
        cover={<img alt={item.name} src={item.image}   className="product-image"  />}
      >
        <Meta title="Europe Street beat" description={item.description} />
        <Button style={{marginTop:'20px'}} onClick={() => handleCardClick(item)} type="primary">
        Add To Cart
      </Button>
      </Card>
     
    </div>
  ))}
</div> 
</div>






      {modal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {product && (
              <>
                <h1>{product.name}</h1>
                <h3 style={{marginTop:'65px'}}>Passenger Information</h3>
              </>
            )}

            <div className='modal-input'>
            <input type="date" placeholder="Name" onChange={(e) => handleInputChange('traveldate', e.target.value)} required  min={getFormattedCurrentDate()} />
            <input type="text" placeholder="Name" onChange={(e) => handleInputChange('name', e.target.value)}  required />
            <input type="email" placeholder="Email" onChange={(e) => handleInputChange('email', e.target.value)}  required />
            <input type="text" placeholder="Age" onChange={(e) => handleInputChange('age', e.target.value)}  required />
            <select onChange={(e) => handleInputChange('gender', e.target.value)}  required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Nationality" onChange={(e) => handleInputChange('nationality', e.target.value)}  required/>
            <input type="text" placeholder="Passport Number (if foreign national)" onChange={(e) => handleInputChange('passportNumber', e.target.value)}  required />
            <button onClick={handleAddPassenger}>Add Passenger</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Homepage;
