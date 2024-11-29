import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';


const PaymentScreen = ({ route, navigation }) => {
    const { product } = route.params;

    const handlePaymentSuccess = (res) => {
        // Navigate to Products screen on successful payment
        Alert.alert(
            "Payment Successful", 
            "Thank you for your purchase!",
            [{ 
                text: "OK", 
                onPress: () => navigation.navigate('Product') 
            }]
        );
    };
  
    const handlePaymentCancel = (e) => {
        // Navigate back to Checkout with the selected product
        Alert.alert(
            "Payment Cancelled", 
            "Your payment was not completed",
            [{ 
                text: "OK", 
                onPress: () => navigation.navigate('Checkout', { product }) 
            }]
        );
    };
  
    return (
      <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_378ab2a328f84a7c7e9c0a57d9eb135d81cdd040"
        amount={product.price}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        currency='ZAR'
        onCancel={(e) => handlePaymentCancel(e)}
        onSuccess={(res) => handlePaymentSuccess(res)}
        autoStart={true}
      />
    </View>
    );
  };

  

  export default PaymentScreen;