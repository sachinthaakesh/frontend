import {createStore, combineReducers, applyMiddleware } from 'redux';
//import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Auth } from './auth';
import { favorites } from './favorites';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//import { Promotions } from './promotions';
//import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            auth: Auth,
            favorites,
           // promotions: Promotions,
            //leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}