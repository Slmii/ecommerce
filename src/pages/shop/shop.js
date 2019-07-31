import React, { useEffect, useState } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import collectionsData   from './collections.data';

function ShopPage() {
const [collections, setCollections] = useState([]);

    useEffect(() => setCollections(collectionsData), []);

    return (
        <React.Fragment>
            {collections.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)}
        </React.Fragment>
    );
};

export default ShopPage;