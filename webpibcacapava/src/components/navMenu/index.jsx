import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class NavMenu extends Component {
  render() {
    return (
    <>
    
    <nav>
        <Link  to="/"> Home</Link>
        <Link  to="/about">Sobre</Link>
      </nav>
    </>
    
    )
  }
}
