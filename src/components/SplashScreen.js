import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import * as ExpoSplashScreen from 'expo-splash-screen';
import { Paystack } from 'react-native-paystack-webview';
import { colors } from '../constants/colors';


// Custom Splash Screen Component
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const prepare = async () => {
      try {
        await ExpoSplashScreen.preventAutoHideAsync();
        // Simulate loading process
        await new Promise(resolve => setTimeout(resolve, 5000));
        navigation.replace('Product');
      } catch (e) {
        console.warn(e);
      } finally {
        await ExpoSplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image 
        source={require('../../assets/reflectory.png')} 
        style={styles.splashLogo} 
      />
      <Text style={styles.splashText}>Payment Gateway App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  splashLogo: {
    width: 100,
    height: 100,
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
