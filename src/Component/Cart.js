import React, { useContext } from 'react';
import { Mycontext } from '../App';
import { products } from '../Data/Data';
import { Card } from 'antd';

const Cart = () => {
  const { passengers } = useContext(Mycontext);

  // Sort passengers by name
  passengers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Passengers Details:</h2>
      <div className="card-container" style={{justifyContent:'center'}}>
        {passengers.map((passenger, index) => {
          const product = products.find((p) => p.id === passenger.productId);

          return (
            <div key={index} className="card">
              <Card>
                <ul>
                  <li>
                    <p>Passenger {index + 1}:</p>
                    <p>Product Name: {product.name}</p>
                    {/* Display passenger details here */}
                    <p>Travel Date: {passenger.traveldate}</p>
                    <p>Name: {passenger.name}</p>
                    <p>Email: {passenger.email}</p>
                    <p>Age: {passenger.age}</p>
                    <p>Gender: {passenger.gender}</p>
                    <p>Nationality: {passenger.nationality}</p>

                    {passenger.nationality === 'foreign' && (
                      <p>Passport Number: {passenger.passportNumber}</p>
                    )}
                  </li>
                </ul>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
