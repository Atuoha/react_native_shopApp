export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const deleteProduct = (id)=>{
    return({type: DELETE_PRODUCT, proId: id})
}

export const addProduct = (title, desc, image, price, colors)=>{
    return({type: ADD_PRODUCT, productData: {title, desc, image, price, colors}})
}

export const updateProduct = (id, title, desc, image, colors)=>{
    return({type: UPDATE_PRODUCT, productId: id, productData: {title, desc, image, colors}})
}