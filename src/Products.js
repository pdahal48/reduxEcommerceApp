import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from './Item'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { addItem, removeItem } from './actions'
import { uuid } from 'uuidv4';
import './item.css'

const Products = () => {
    const products = useSelector(state => state.products);
    const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch();


    function handleAdd(item) {
        dispatch(addItem(item))
        console.log(cartProducts)
    }

    return (
        <div>
        <Row>
        <Col className="card-wrapper">
            {Object.values(products).map((p) => (
                <Item
                    name={p.name}
                    src = {p.image_url}
                    price = {p.price}
                    desc = {p.description}
                    key={p.name}
                    handleAdd = {handleAdd}
                    id = {uuid()}
                />
            ))}
        </Col>
        </Row>
        </div>
    )
}

export default Products;