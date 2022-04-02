import * as React from 'react';
import {BrowserRouter as Router , 
  Routes, Route, Link
} from "react-router-dom"
import About from "./pages/about/index"
import Home from "./pages/home/index"
import Nav from "./components/navMenu/index"

export default function App() {
  return (

    <Router>

     <Nav/>

      <Routes>
        <Route path='/' element= {<Home/> } />
        <Route path='/about' element= {<About/> } />
      </Routes>
    </Router>
   
  );
}


