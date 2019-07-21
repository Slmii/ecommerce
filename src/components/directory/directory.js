import React, { useState, useEffect } from 'react';

import MenuItem      from '../menu-item/menu-item';
import directoryData from './directory.data';

import './directory.scss';

function Directory() {
    const [sections, setSection] = useState([]);

    useEffect(() => setSection(directoryData), []);

    return (
        <div className='directory-menu'>
            {sections.map(({ id, title, imageUrl, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)}
        </div>
    );
};

export default Directory;