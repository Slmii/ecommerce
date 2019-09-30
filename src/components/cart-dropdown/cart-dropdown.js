import React, { useEffect, useState } from 'react';
import { connect }                    from 'react-redux';

import CartItem     from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

function CartDropdown({ cartItems }) {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems(cartItems);
    }, [items]);
    
    return (
        <div className='cart-dropdown'>
            {   cartItems.length < 1
                ? <div className='cart-empty'>NO ITEMS IN YOUR SHOPPING CART</div>
                : <>
                    <div className='cart-items'>
                        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                    </div>
                    <CustomButton>GO TO CHECKOUT</CustomButton>
                  </>
            }
        </div>
    ); 
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);