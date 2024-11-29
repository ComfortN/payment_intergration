import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';


const PaymentScreen = ({ route, navigation }) => {
    const { product } = route.params;
  
    return (
      <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_378ab2a328f84a7c7e9c0a57d9eb135d81cdd040"
        amount={product.price}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        currency='ZAR'
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
      />
    </View>
    );
  };

  

  export default PaymentScreen;