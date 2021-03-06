import React from 'react'
import { Nav, Navbar, Badge, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector, shallowEqual } from "react-redux";
import { Link } from 'react-router-dom';


const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x"/>

const NavBar = () => {
    let numItems = 0;
    const cartProducts = useSelector((store) => store.cart, shallowEqual);
    Object.values(cartProducts).map((val) => numItems += val);

    return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="/">EReduxShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav>
      <Link to="/cart">
        <button className="btn btn-outline-secondary" href="/cart">
        {cart} <Badge bg="danger">{numItems}</Badge>
            <span className="visually-hidden">unread messages</span>
        </button>
        </Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
)}

export default NavBar;