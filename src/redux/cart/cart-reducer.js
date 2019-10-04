import CartActionTypes from './cart-types';

import { addItemToCart, decreaseCartQuantity } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state, 
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
            };
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state, 
                cartItems: decreaseCartQuantity(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

export default CartReducer;