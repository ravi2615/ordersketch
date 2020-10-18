import React, { Component,useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";
import Order from "./components/Order";
import Login from './components/Login';
import Social from './components/Social';
class App extends Component {


  render() {
    return (
      <React.Fragment>
        
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/login" component={Login} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Social />
      </React.Fragment>
    );
  }
}

export default App;