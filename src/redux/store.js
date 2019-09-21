// import axios                            from 'axios';
import logger                           from 'redux-logger';
// import thunk                            from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './root-reducer';

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000/'
// });

// applyMiddleWare EXPECTS AN ARRAY OF MIDDLEWARES
const middleWares = [
    logger,
    //thunk.withExtraArgument(axiosInstance)
];

// CREATE THE STORE
const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares)
);

export default store;
