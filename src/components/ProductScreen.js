import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';


const ProductScreen = ({ navigation }) => {
    const products = [
        {
            id: 1,
            name: 'Leaf Bridal Jewelry Set',
            price: 9.99,
            description: 'Complete your bridal look with our exquisite Leaf Bridal Jewelry Set. Featuring a stunning necklace, earrings, bracelet, and ring, this set is adorned with clear cubic zirconia stones, designed to complement any wedding dress beautifully.',
            image: require('../../assets/rosegold.jpeg')
        }
        ];
    
        return (
        <View style={styles.container}>
            {products.map(product => (
            <View key={product.id} style={styles.productCard}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>R{product.price}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <TouchableOpacity 
                style={styles.buyButton}
                onPress={() => navigation.navigate('Checkout', { product })}
                >
                <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            ))}
        </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background
        },
        productCard: {
          width: '100%',
          padding: 20,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 10,
          alignItems: 'center',
          backgroundColor: '#818D8B'
        },
        productImage: {
          width: 200,
          height: 200,
          resizeMode: 'contain'
        },
        productName: {
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 10,
          color: colors.textPrimary,
        },
        productPrice: {
          fontSize: 16,
          color: colors.textSecondary
        },
        productDescription: {
          textAlign: 'center',
          marginVertical: 10,
          color: colors.primary
        },
        buyButton: {
          backgroundColor: colors.primary,
          padding: 10,
          paddingHorizontal: 30,
          borderRadius: 5
        },
        buyButtonText: {
          color: 'white',
          textAlign: 'center'
        },
        checkoutDetails: {
          width: '100%',
          alignItems: 'center'
        },
        checkoutTitle: {
          fontSize: 24,
          marginBottom: 20
        },
        payButton: {
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 5,
          marginTop: 20
        },
        payButtonText: {
          color: 'white',
          textAlign: 'center'
        },
        successText: {
          fontSize: 24,
          color: 'green'
        }
      });
      
    export default ProductScreen;