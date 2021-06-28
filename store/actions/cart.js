

export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (product)=>{
    return({type: ADD_TO_CART, product: product})
}


export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const removeFromCart = (id)=>{
    return({type: REMOVE_FROM_CART, productId: id})
}


export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const remove_all_from_cart = ()=>{
    return{type: REMOVE_ALL_FROM_CART}
}
