import React from 'react'
import { useSelector } from "react-redux"
import ProductCard from './ProductCard'

const ProductList = () => {

    const filterList = (list, key) => {
        return list.filter((p) =>
            p.title.toUpperCase().includes(key.toUpperCase().trim())
        )
    }

    const list = useSelector((state) => state.ProductReducer.products)
    const key = useSelector((state) => state.ProductReducer.search)

    const filterdList = filterList(list, key)
    return (
        <div className='product-list'>
            {
                filterdList.map((p, index) => <ProductCard product={p} key={index} />)
            }
        </div>
    )
}

export default ProductList