import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Sort from "./components/Sort/sort";
import Filter from './components/Filter/filter';
import Footer from './components/Footer/footer';
import Cart from './components/Cart/cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <Header/>
      <Switch>
        <div className='container'>
          <Route path="/adobeCart" exact> <Filter/><Sort /> </Route>
          <Route path='/Cart'><Cart/></Route>
        </div>
      </Switch>
      
      <Footer/>
    </Router>
  );
}

export default App;
