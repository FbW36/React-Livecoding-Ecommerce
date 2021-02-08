import React, { useContext, useEffect } from 'react';
import Nav from './Nav';
import MyContext from '../context/MyContext';

const OrderPlaced = ({ history }) => {
  const context = useContext(MyContext);
  const { setCartItems } = context;

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <main>
      <Nav />
      <section className='orders-placed'>
        <p>Order Placed</p>
        <button onClick={() => history.push('/products')}>
          Carry on shopping
        </button>
      </section>
    </main>
  );
};

export default OrderPlaced;
