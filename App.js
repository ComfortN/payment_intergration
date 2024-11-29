import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './src/components/SplashScreen';
import ProductScreen from './src/components/ProductScreen';
import CheckoutScreen from './src/components/CheckoutScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Product" 
          component={ProductScreen} 
          options={{ title: 'Products' }} 
        />
        <Stack.Screen 
          name="Checkout" 
          component={CheckoutScreen} 
          options={{ title: 'Checkout' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

