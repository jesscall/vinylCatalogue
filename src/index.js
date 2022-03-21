import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './App';
import { fetchCollection } from './features/collection/collectionSlice';
import { fetchWishlist } from './features/wishlist/wishlistSlice';

store.dispatch(fetchCollection());
store.dispatch(fetchWishlist());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

