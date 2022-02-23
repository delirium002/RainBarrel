import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';

import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import { taskMiddleware } from 'react-palm/tasks';

import { rootPersistConfig, rootReducer } from './rootReducer';

// ----------------------------------------------------------------------

// const store = configureStore({
//   reducer: persistReducer(rootPersistConfig, rootReducer),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }),
// });

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     enhanceReduxMiddleware([
//       /* Add other middlewares here */
//     ])
//   )
// );

const store = createStore(persistReducer(rootPersistConfig, rootReducer), {}, applyMiddleware(taskMiddleware));

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
