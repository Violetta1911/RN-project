import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

// import screens
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import {FormScreen} from '../screens/shop/FormScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

// import constatnts
import Colors from '../constants/Colors';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Menu = () => <Drawer.Navigator>
   <Drawer.Group
      screenOptions={{
         headerStyle: { backgroundColor: Platform.OS = 'android' ? Colors.primary : '' },
         headerTitleStyle: { fontWeight: 'bold' },
         headerTintColor: Platform.OS = 'android' ? 'white' : Colors.primary,
        }}
     >

  <Drawer.Screen
    name="All Products"
    component={ProductsOverviewScreen}
    options={{
      drawerActiveTintColor: Colors.primary,
      drawerLabel: 'All products',
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS = 'android' ? 'cart' : 'ios-cart'}
          size={23}
          color={Colors.primary}
        />
      ),
    }}
  />
  <Drawer.Screen
    name="Your Orders"
    component={OrdersScreen}
    options={{
      drawerLabel: 'Your Orders',
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS = 'android' ? 'list' : 'ios-list'}
          size={23}
          color={Colors.primary}
        />
      ),
    }}
  />
   <Drawer.Screen
    name="UserProducts"
    component={UserProductScreen}
    options={{
      drawerLabel: 'User Products',
      drawerIcon: () => (
        <Ionicons
          name={Platform.OS = 'android' ? 'create' : 'ios-create'}
          size={23}
          color={Colors.primary}
        />
      ),
    }}
  />

  </Drawer.Group>

</Drawer.Navigator>

const ProductNavigator = props => {
  return (
    <NavigationContainer>    
      <Stack.Navigator initialRouteName={Menu}>
      <Stack.Group
      screenOptions={{
         headerStyle: { backgroundColor: Colors.primary },
         presentation:'modal',
         gestureEnabled: true,
         gestureDirection: 'horizontal',
         }}
     >
          <Stack.Screen
            name="ProductsOverviewScreen"
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
           <Stack.Screen
            name="Cart"
            component={CartScreen}
          />   
           <Stack.Screen
            name="EditProduct"
            component={EditProductScreen}
          />       
          
           
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default ProductNavigator;
