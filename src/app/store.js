import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from '../features/collection/collectionSlice';
//import searchReducer from '../features/search/searchSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    //search: searchReducer,
    wishlist: wishlistReducer,
  },
});