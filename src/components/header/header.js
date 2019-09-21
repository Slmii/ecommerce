import React                from 'react';
import { connect }          from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
// USE REACTOMPONENT AS ... WHEN IMPORTING SVG IMAGES
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

function Header({ currentUser, history }) {

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
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    currentUser: user
});

export default connect(mapStateToProps)(withRouter(Header));