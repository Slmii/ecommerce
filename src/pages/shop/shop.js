import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage      from '../collection/collection';
import CollectionsOverview from '../../components/collections-overview/collections-overview';

function ShopPage({ match }) {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionRouteName`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;