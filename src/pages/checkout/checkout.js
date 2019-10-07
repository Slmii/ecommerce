import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem                         from '../../components/checkout-item/checkout-item';
import Stripe                               from '../../components/stripe/stripe';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart-selectors';

import './checkout.scss';

function CheckoutPage({ cartItems, total }) {

    if (cartItems.length < 1)
    {
        return (
            <div className='checkout-page'>
                <div className='cart-empty'>NO ITEMS IN YOUR SHOPPING CART</div>
            </div>
        );
    }

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Total</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)}
            <div className='total-price'>
                <span>TOTAL: &euro;{total}</span>
            </div>
            <Stripe price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);  