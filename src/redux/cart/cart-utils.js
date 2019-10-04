export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem)
    {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }
            : cartItem
        );
    }

    // THIS WILL ADD THE EXTRA PROPERTY 'QUANTITY' SINCE THE FIRST TIME THE CART ITEM NEVER EXISTS
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseCartQuantity = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id);

    if (existingCartItem.quantity > 1)
    {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToDecrease.id 
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1
            }
            : cartItem
        );
    }

    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
};  