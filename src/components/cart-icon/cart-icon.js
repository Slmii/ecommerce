import React       from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import { selectCartItemsCount }           from '../../redux/cart/cart-selectors';
import { toggleCartHidden }               from '../../redux/cart/cart-actions';

import './cart-icon.scss';

function CartIcon({ itemCount, toggleCartHidden }) {

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);