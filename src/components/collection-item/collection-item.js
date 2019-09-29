import React       from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem }  from '../../redux/cart/cart-actions';

import './collection-item.scss';

function CollectionItem({ addItem, item }) {

    const { name, price, imageUrl } = item;

    const handleClick = () => addItem(item);

    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={handleClick}>ADD TO CART</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);