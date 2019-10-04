import { createSelector } from 'reselect';

// INPUT SELECTORS
const selectCart = state => state.cart;

// OUTPUT SELECTOR
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, { price, quantity }) => acc + (price * quantity), 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);