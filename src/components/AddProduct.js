import React, { useState } from 'react'
import ProductModal from './ProductModal';


const AddProduct = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button onClick={handleShow}>Add product</button>
            <ProductModal show={show} handleClose={handleClose} />
        </div>
    )
}

export default AddProduct