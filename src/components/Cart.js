import React, { Component } from 'react'
import Cartpage2 from "./Cart.page2"
export default class Cart extends Component {
    render() {
        return (
            <div>
                <h3> Component from cart</h3>
                <Cartpage2 name="deva" address ="avinashi" phonenumber="9655227714"/>
            </div>
        )
    }
}
