import React          from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {

    const handleOnClick = () => history.push(`${match.url}${linkUrl}`);

    return (
        <div className={`${size} menu-item`} onClick={handleOnClick}>
            <div className='background-image' style={{ 
                backgroundImage: `url(${imageUrl})` 
            }} />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);