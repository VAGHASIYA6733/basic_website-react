import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"

const NavbarDemo = () => {
  return (
    <>
    
      <Navbar bg="dark" expand="lg" >
        <img src="https://i.postimg.cc/d1ZfnzDm/coding-depth-photoaidcom-cropped.png" alt="" className='logoimg'/>
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft:"-70px",color:"white"}}>Coding_Depth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='home' style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Link</Nav.Link>
            <NavDropdown title="item" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                item 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
               item 3 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                other item
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarDemo
