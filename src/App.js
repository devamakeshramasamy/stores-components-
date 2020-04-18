import React, { Component } from 'react';
import{Switch,Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Prodectlist from "./components/Prodect.list";
import Cart from "./components/Cart";
import Detail from "./components/Detail";


export default class App extends Component {
  render() {
    return (
     <React.Fragment>
     <NavBar/>
     <Switch>
    
    <Route path="/cart" component={Cart}/>
    <Route path="/detail" component={Detail}/>
    <Route path="/" component={Prodectlist}/>

    
     </Switch>
     

     </React.Fragment>

    )
  }
}