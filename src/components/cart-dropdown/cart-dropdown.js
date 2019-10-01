import React, { useEffect, useState } from 'react';
import { connect }                    from 'react-redux';

import CartItem            from '../cart-item/cart-item';
import CustomButton        from '../custom-button/custom-button';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import './cart-dropdown.scss';

function CartDropdown({ cartItems, total }) {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);
    
    return (
        <div className='cart-dropdown'>
            {   items.length < 1
                ? <div className='cart-empty'>NO ITEMS IN YOUR SHOPPING CART</div>
                : <>
                    <div className='cart-items'>
                        {items.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                    </div>
                    <div className='cart-total'>Total: &euro;{total}</div>
                    <CustomButton>GO TO CHECKOUT</CustomButton>
                  </>
            }
        </div>
    ); 
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CartDropdown);