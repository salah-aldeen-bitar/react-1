import React from "react";
import { Link } from "react-router-dom";
/*import { Logo , NavbarSection , LogoText , UlList , ListItem } from "./style.js";*/
import "./style.css";


/*const Style1 = {
    display: 'block',
    color: '#222' ,
    textDecoration: 'none',
    padding: '10px 15px',
    fontWeight: 'bold',
    
}


 function Hover1 () {
    document.getElementById('Line').style.color = '#f34';
}
function Hover2 () {
    document.getElementById('Line').style.color = '#000';
}
function Hover3 () {
    document.getElementById('Line1').style.color = '#f34';
}
function Hover4 () {
    document.getElementById('Line1').style.color = '#000';
}
function Hover5 () {
    document.getElementById('Line2').style.color = '#f34';
}
function Hover6 () {
    document.getElementById('Line2').style.color = '#000';
}
function Hover7 () {
    document.getElementById('Line3').style.color = '#f34';
}
function Hover8 () {
    document.getElementById('Line3').style.color = '#000';
}

function Hover9 () {
    document.getElementById('Line4').style.color = '#f34';
}
function Hover10 () {
    document.getElementById('Line4').style.color = '#000';
}
function Hover11 () {
    document.getElementById('Line5').style.color = '#f34';
}
function Hover12 () {
    document.getElementById('Line5').style.color = '#000';
}*/


/*const Navbar = () =>{
    return(
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText style={{fontSize:'35px' }}>WEB DESIN</LogoText>
                    
                    <i className="fa fa-star"  style={{color:'gold',marginLeft:'48px' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'black'}} aria-hidden="true"></i>
                   
                </Logo>
                
               
                
                <UlList>
                    <ListItem><Link  id="Line"  onMouseMove={Hover1} onMouseLeave={Hover2} style={Style1}   to="/">Home</Link></ListItem>
                    <ListItem><Link  id="Line1" onMouseMove={Hover3} onMouseLeave={Hover4} style={Style1}   to="/work">Work</Link> </ListItem>
                    <ListItem><Link  id="Line2" onMouseMove={Hover5} onMouseLeave={Hover6} style={Style1}   to="/protflio">Portflio</Link></ListItem>
                    <ListItem><Link  id="Line3" onMouseMove={Hover7} onMouseLeave={Hover8} style={Style1}   to="/socialmedia">Socialmedia</Link> </ListItem>
                    <ListItem><Link  id="Line4" onMouseMove={Hover9} onMouseLeave={Hover10} style={Style1}   to="/about">About</Link> </ListItem>
                    <ListItem><Link  id="Line5" onMouseMove={Hover11} onMouseLeave={Hover12} style={Style1}   to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar;*/
/*const Navbar = ()=>{
 

let nav = document.querySelector('nav');
 addEventListener('click' , function(){
    nav.classList.toggle('active');
 } )


    return(
        <div className="container">
             <div className=" Logo">
                    <div className="LogoText" style={{fontSize:'35px' }}>WEB DESIN</div>
                    
                    <i className="fa fa-star icon-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'gold' }} aria-hidden="true"></i>
                    <i className="fa fa-star"  style={{color:'black'}} aria-hidden="true"></i>
                   
                </div>
                <button className="menu" >menu</button>
                <nav>
                <ul className="ul-nav">
                    <li id="Line"><Link     to="/">Home</Link></li>
                    <li id="Line"><Link    to="/work">Work</Link> </li>
                    <li id="Line"><Link    to="/protflio">Portflio</Link></li>
                    <li id="Line"><Link    to="/socialmedia">Socialmedia</Link> </li>
                    <li id="Line"><Link    to="/about">About</Link> </li>
                    <li id="Line"><Link    to="/contact">Contact</Link></li>
                </ul>
                </nav>
                
        </div>
    )
}
export default Navbar;*/

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navbar2 = ()=> {
  return (
    
    <div className="nav-container">
         
      <Navbar  expand="lg" >
      <div className="logo">
                    <h2 className="logo-text" >WEB DESIN</h2>
                    
                    <i className="fa fa-star star1"  aria-hidden="true"></i>
                    <i className="fa fa-star star"  aria-hidden="true"></i>
                    <i className="fa fa-star star"  aria-hidden="true"></i>
                    <i className="fa fa-star star"  aria-hidden="true"></i>
                    <i className="fa fa-star star5"  aria-hidden="true"></i>
                   
                </div>
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
navbarScroll
        >
          <Nav.Link herf="#"><Link     to="/">Home</Link></Nav.Link>
          <Nav.Link herf="#"><Link    to="/work">Work</Link></Nav.Link>
          <Nav.Link href="#"><Link    to="/protflio">Portflio</Link></Nav.Link>
          <Nav.Link href="#"><Link    to="/socialmedia">Socialmedia</Link></Nav.Link>
          <Nav.Link href="#"><Link    to="/contact">Contact</Link></Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    
    </div>
  );
}

export default Navbar2;