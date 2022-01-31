import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import {FormScreen} from '../screens/shop/FormScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-natie ';
import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons'


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Menu = () => <Drawer.Navigator>
   <Drawer.Group
      screenOptions={{ headerStyle: { backgroundColor: Colors.primary } }}
     >

  <Drawer.Screen
    name="All Products"
    component={ProductsOverviewScreen}
  />
  <Drawer.Screen
    name="Your Orders"
    component={OrdersScreen}
    options={{
      // drawerIcon: () => (
      //   <MaterialIcons
      //     name={Platform.OS ==='android' ? 'create' : 'ios-create'}
      //     size={23}
      //     color={Colors.primary}
      //   />
      // ),
    }}
  />
  </Drawer.Group>

</Drawer.Navigator>

const ProductNavigator = props => {
  return (
    <NavigationContainer>    
      <Stack.Navigator initialRouteName={Menu}>
      <Stack.Group
      screenOptions={{ headerStyle: { backgroundColor: Colors.primary } }}
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
           
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default ProductNavigator;
