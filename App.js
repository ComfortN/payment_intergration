import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './src/components/SplashScreen';


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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

