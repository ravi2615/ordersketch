import React, { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
// import './Navbar.css';
// import logo from '../images/Logo.9221bc4c.png';
import { NavLink, Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

const Nav = styled.nav`
width: 100%;
// height: 4.5rem;
// border-bottom: 5px solid #f1f1f1;
padding: 10px 20px;
display: flex;
justify-content: space-between;
background: #DAE0E2;
color: black;
box-shadow: 0 0 8px #95a5a6;

.cart{
  margin-top: 1rem;
}

.logo {
  font-size: 2rem;
}

  .logo img {
    padding: 5px 0;
    height: 3rem;
    width:8rem;
    animation: brand 2s linear infinite alternate-reverse both;

  }

  @-webkit-keyframes brand {
    0%{
        transform: scale(0.8);
    }

    100%{
        transform: scale(1.1);
    }
}

@keyframes brand {
    0%{
        transform: scale(0.8);
    }

    100%{
        transform: scale(1.1);
    }
}

@media(max-width:768px){
  .cart{
    margin: 0 1rem;
  }

}

`

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  const navbarFixed = () =>{
    if(window.scrollY >= 50)
    setFixed(true)
    else
    setFixed(false)
  }

  
  window.addEventListener('scroll', navbarFixed);

 

  return (
    <Nav className= {fixed ? "fixed-top container-fluid bg-dark my-1":"container-fluid bg-dark my-1"}>
      <div className="logo text-white font-weight-bold">
       <NavLink className="text-white navbar-brand" to="/" > Sketch</NavLink>
      </div>
      <Link to="/cart" className="ml-auto cart">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      <Burger />
    </Nav>
  )
}

export default Navbar
