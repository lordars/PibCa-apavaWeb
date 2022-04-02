import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./styless.css"
import Avatar from "../avatar/avatar"

export default class NavMenu extends Component {
  render() {
    return (
    <>
    <nav className='NavBar'>
        <Avatar />
        <Link  to="/"> Home</Link>
        <Link  to="/about">Sobre</Link>
      </nav>
    </>
    
    )
  }
}
