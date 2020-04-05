import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import {MdShoppingBasket} from 'react-icons/md'

import { Container, Cart } from './styles';

import logo from '../../assets/image/logo.svg'

function Header({ cart }) {
  return (
    <Container>
      <Link to="/">
      <img src={logo} alt="Rocketshoes"/>
      </Link>
      <Cart to="/cart">
    <div>
      <strong>Meu carrinho</strong>
      <span>{cart.length} itens</span>
    </div>
    <MdShoppingBasket size={36} color="#FFF"/>
      </Cart>
    </Container>
  );
}

export default connect(state=>({
  cart: state.cart,
}))(Header);
