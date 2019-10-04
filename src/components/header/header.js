import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, withRouter }         from 'react-router-dom';

import CartIcon                   from '../cart-icon/cart-icon';
import CartDropdown               from '../cart-dropdown/cart-dropdown';
import { auth }                   from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden }       from '../../redux/cart/cart-selectors';
import { selectCurrentUser }      from '../../redux/user/user-selectors';
import { toggleCartHidden }       from '../../redux/cart/cart-actions';

import './header.scss';

function Header({ currentUser, hidden, history }) {

    const handleOnClick = () => {
        auth.signOut();
        history.push('/');
    };

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser 
                    ? <div className='option' onClick={handleOnClick}>SIGN OUT</div> 
                    : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));