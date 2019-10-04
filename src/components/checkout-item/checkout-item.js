import React               from 'react';
import { connect }         from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt }      from '@fortawesome/free-solid-svg-icons'

import { addItem, decreaseQuantity, removeItem } from '../../redux/cart/cart-actions';

import './checkout-item.scss';

function CheckoutItem({ addItem, decreaseQuantity, removeItem, item }) {
    const { id, imageUrl, price, name, quantity } = item;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseQuantity(item)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className='price'>&euro;{price}</span>
            <span className='total'>&euro;{price * quantity}</span>
            <span className='remove-button'>
                <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeItem(id)} />
            </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item)),
    removeItem: id => dispatch(removeItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);