import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Logo from './Logo';

const Nav = () => {
  const context = useContext(MyContext);
  const { loginData, setLoginData, cartItems } = context;

  useEffect(() => {
    setLoginData({ ...loginData, success: false });
  }, []);

  return (
    <header>
      <Logo />
      <h3>Welcome {loginData.username}</h3>
      <ul>
        <NavLink exact activeStyle={{ color: 'green' }} to='/'>
          <li>Logout</li>
        </NavLink>

        <NavLink exact activeStyle={{ color: 'green' }} to='/products'>
          <li>Products</li>
        </NavLink>

        <NavLink activeStyle={{ color: 'green' }} to='/cart'>
          <li>
            Cart <span>{cartItems.length}</span>
          </li>
        </NavLink>

        <NavLink exact activeStyle={{ color: 'green' }} to='/checkout'>
          <li> Checkout </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Nav;
