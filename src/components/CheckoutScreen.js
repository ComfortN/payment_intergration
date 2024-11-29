import React from 'react';
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { colors } from '../constants/colors';

const CheckoutScreen = ({ route, navigation }) => {
    const { product } = route.params;
  
    const initiatePayment = () => {
      navigation.navigate('Payment', { product });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.checkoutTitle}>Checkout</Text>
        <View style={styles.checkoutDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>R{product.price}</Text>
          <TouchableOpacity 
            style={styles.payButton}
            onPress={initiatePayment}
          >
            <Text style={styles.payButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

  // Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  checkoutDetails: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 15,
    padding: 20
  },
  checkoutTitle: {
    fontSize: 30,
    marginBottom: 20,
    color: colors.primary
  },
  productName: {
    color: colors.textSecondary
  },
  productPrice: {
    color: colors.textSecondary
  },
  payButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    marginTop: 20
  },
  payButtonText: {
    color: colors.textPrimary,
    textAlign: 'center'
  },
  successText: {
    fontSize: 24,
    color: 'green'
  }
});


  export default CheckoutScreen;