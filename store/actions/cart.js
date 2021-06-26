export const TOGGLE_TO_CART = 'TOGGLE_TO_CART'

export const toggle_to_cart = (id)=>{
    return({type: TOGGLE_TO_CART, productId: id})
}