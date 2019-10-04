import React, { useEffect, useState } from 'react';
import { connect }                    from 'react-redux';
import { createStructuredSelector }   from 'reselect';
import { withRouter }                 from 'react-router-dom';

import CartItem            from '../cart-item/cart-item';
import CustomButton        from '../custom-button/custom-button';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import { toggleCartHidden }                 from '../../redux/cart/cart-actions';

import './cart-dropdown.scss';

function CartDropdown({ cartItems, total, history, toggleCartHidden }) {
    const [items, setItems] = useState([]);
    
    useEffect(() => setItems(cartItems), [cartItems]);

    const handleClick = () => {
        history.push('/checkout');
        toggleCartHidden();
    };
    
    return (
        <div className='cart-dropdown'>
            {   items.length < 1
                ? <span className='cart-empty'>NO ITEMS IN YOUR SHOPPING CART</span>
                : <>
                    <div className='cart-items'>
                        {items.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                    </div>
                    <div className='cart-total'>Total: <strong>&euro;{total}</strong></div>
                    <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
                  </>
            }
        </div>
    ); 
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps, { toggleCartHidden })(withRouter(CartDropdown));