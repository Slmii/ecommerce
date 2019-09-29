import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

function CollectionPreview({ title, items }) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .slice(0, 4)
                    .map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default CollectionPreview;