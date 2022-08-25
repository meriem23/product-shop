import { ADD_PRODUCT, DELETE_PRODUCT, FILTER_PRODUCT, SAVE_KEYWORD } from "./types"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}
export const saveKey = (key) => {
    return {
        type: SAVE_KEYWORD,
        payload: key
    }
}
// export const filterProduct = (product) => {
//     return {
//         type: FILTER_PRODUCT,
//         payload: key
//     }
// }