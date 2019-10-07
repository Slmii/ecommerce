import COLLECTIONS_DATA from './collections.data';

const INITIAL_STATE = {
    collections: COLLECTIONS_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        default:
            return state;
    };
};

export default shopReducer;