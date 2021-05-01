// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './reducer/index'; //Import the reducer

// const myStore = createStore(reducers, applyMiddleware(thunk));
// export {myStore};
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducer/index'; //Import the reducer
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// Connect our store to the reducers

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['allData'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const myStore = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(myStore);
export {myStore, persistor};
// const myStore = createStore(reducers, applyMiddleware(thunk));
// export {myStore};
