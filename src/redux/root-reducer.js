import storage             from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import { persistReducer }  from 'redux-persist';

import cartReducer         from './cart/cart-reducer';
import directoryReducer    from './directory/directory-reducer';
import shopReducer         from './shop/shop-reducer';
import userReducer         from './user/user-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);