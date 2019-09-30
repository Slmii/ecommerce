export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id );

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

export const removeItemFromCart = (cartItems, id) => cartItems.filter(cartItem => cartItem.id !== id);