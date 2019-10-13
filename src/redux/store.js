// import axios                            from 'axios';
import logger                           from 'redux-logger';
// import thunk                            from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { persistStore }                 from 'redux-persist';

import rootReducer from './root-reducer';

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000/'
// });

// applyMiddleWare EXPECTS AN ARRAY OF MIDDLEWARES
const middleWares = [];

if (process.env.NODE_ENV === 'development') middleWares.push(logger);
//thunk.withExtraArgument(axiosInstance)

// CREATE THE STORE
export const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares)
);

export const persistor = persistStore(store)
