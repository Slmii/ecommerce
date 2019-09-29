import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

function CartDropdown() {
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-empty'>NO ITEMS IN YOUR SHOPPING CART</div>
            {/* <div className='cart-items'></div> */}
            {/* <CustomButton>GO TO CHECKOUT</CustomButton> */}
        </div>
    ); 
}

export default CartDropdown;