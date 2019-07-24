import React, { useState, useEffect } from 'react';

import MenuItem      from '../menu-item/menu-item';
import directoryData from './directory.data';

import './directory.scss';

function Directory() {
    const [sections, setSection] = useState([]);

    useEffect(() => setSection(directoryData), []);

    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)}
        </div>
    );
};

export default Directory;