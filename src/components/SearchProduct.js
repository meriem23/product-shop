import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { saveKey } from '../actions/ProductActions'

const SearchProduct = () => {
    const dispatch = useDispatch()
    const [key, setKey] = useState("")
    return (
        <div>
            <input type="text" placeholder='Search for a product' name="key"
                onChange={(e) => { setKey(e.target.value); dispatch(saveKey(key)) }}
            />
        </div>
    )
}

export default SearchProduct