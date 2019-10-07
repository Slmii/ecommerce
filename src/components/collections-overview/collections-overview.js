import React                        from 'react';  
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview                from '../collection-preview/collection-preview';
import { selectPreviewShopCollections } from '../../redux/shop/shop-selectors';

import './collections-overview.scss';

function CollectionsOverview({ collections }) {
    return (
        <div className='collection-overview'>
            {collections.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectPreviewShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);