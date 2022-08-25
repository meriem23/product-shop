import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addProduct } from "../actions/ProductActions"

const ProductModal = ({ show, handleClose }) => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
        rating: 0
    })

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a new product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Title</Form.Label>
                        <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="title" type="text" placeholder="Enter product title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Description</Form.Label>
                        <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="description" type="text" placeholder="Enter product title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Category</Form.Label>
                        <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="category" type="text" placeholder="Enter product title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Image</Form.Label>
                        <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="image" type="text" placeholder="Enter product title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Price</Form.Label>
                        <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="price" type="text" placeholder="Enter product title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Rating</Form.Label>
                        <input onChange={(e) => { setProduct({ ...product, [e.target.name]: +(e.target.value) }) }} name="rating" type="text" placeholder="Enter product title" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={
                    () => {
                        dispatch(addProduct(product));
                        handleClose()
                    }

                }>
                    Add
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ProductModal