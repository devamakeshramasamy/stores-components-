import React, { Component } from 'react';
import{Switch,Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Prodectlist from "./components/Prodect.list";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Default from "./components/Default";

export default class App extends Component {
  render() {
    return (
     <React.Fragment>
     <NavBar/>
     <Switch>
    <Route exact path="/" component={Prodectlist}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/detail" component={Detail}/>
    <Route component={Default}/>

    
     </Switch>
     

     </React.Fragment>

    )
  }
}