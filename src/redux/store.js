// import {  combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import contactReducer from './contact-reducer';
import logger  from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

const myMiddleware = store => next => action => {
    console.log('моя прослойка', action);
    next(action)
}

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}), myMiddleware,
    logger,];

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
    reducer: {
        contacts: contactReducer
    },
    middleware,
    devTools: process.env.NODE_ENV==='development',
})

// const persistor = persistStore(store);
// const storeFin ={store, persistor}

export default store;

