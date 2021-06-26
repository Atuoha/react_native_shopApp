class CartItem{
    constructor(productId, quantity, productTitle, productPrice, sum){
        this.quantity = quantity;
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.sum = sum;
    }
}

export default CartItem