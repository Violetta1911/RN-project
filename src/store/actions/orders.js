export const ADD_ORDER = 'ADD_ORDER';
// export const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER'

export const addOrder = (cartItems, totalAmount) => {
    return {
        type: ADD_ORDER,
        orderData: {items: cartItems, totalAmount: totalAmount}
    };
}

// export const removeFromOrder = productId => {
//     return {type: REMOVE_FROM_CART, pid: productId}
// }