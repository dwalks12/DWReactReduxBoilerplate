import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/reducer.jsx'
import thunkMiddleware from 'redux-thunk';

const middleware = routerMiddleware(history)
const loggerMiddleware = createLogger();

const store = process.env.NODE_ENV !== 'production' ? createStore(
	combineReducers({
		rootReducer,
		routing: routerReducer,
	}),
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
		middleware,
	),
) : createStore(
	combineReducers({
		rootReducer,
		routing: routerReducer,
	}),
	applyMiddleware(
		thunkMiddleware,
		middleware,
	),
);

export default store;
