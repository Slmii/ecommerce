import React               from 'react';
import { connect }         from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt }         from '@fortawesome/free-solid-svg-icons'

import { removeItem } from '../../redux/cart/cart-actions';

import './cart-item.scss';

function CartItem({ removeItem, item: { id, imageUrl, price, name, quantity } }) {
    
    const handleClick = () => removeItem(id);
   
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='quantity-price'>{quantity} x &euro;{price}</span>
            </div>
            <div className='item-remove'>
                <FontAwesomeIcon icon={faTrashAlt} onClick={handleClick} />
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id))
});

export default connect(null, mapDispatchToProps)(CartItem);