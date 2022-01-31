import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProductNavigator from './src/navigation/ShopNavigator';
import {composeWithDevTools} from 'redux-devtools-extension';

import productReducer from './src/store/reducers/products';
import cartReducer from './src/store/reducers/cart';
import ordersReducer from './src/store/reducers/orders';



const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer 
  
});
const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
 
  return (
   <Provider store={store}>     
    <ProductNavigator/>   
   </Provider>
  );
};

export default App;


