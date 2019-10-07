import React                        from 'react';
import { createStructuredSelector } from 'reselect';
import { connect }                  from 'react-redux';

import MenuItem                    from '../menu-item/menu-item';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

import './directory.scss';

function Directory({ sections }) {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);