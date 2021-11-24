import React from 'react'
import { Nav, Navbar, Badge, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";

const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x"/>

const NavBar = () => {
    const cartProducts = useSelector(state => state.cart);

    console.log(cartProducts.length)
    return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#">EReduxShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#action2">Products</Nav.Link>
      </Nav>
        <button className="btn btn-outline-secondary">
        {cart} <Badge bg="danger">{cartProducts.length}</Badge>
            <span className="visually-hidden">unread messages</span>
        </button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;