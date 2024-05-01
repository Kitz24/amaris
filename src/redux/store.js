import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';

const persistedCartState = JSON.parse(localStorage.getItem("cart")) || [];

const store = configureStore({
  reducer: rootReducers,
  preloadedState: {
    handleCart: persistedCartState
  }
});

export default store;
